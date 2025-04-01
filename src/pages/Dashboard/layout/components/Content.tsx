import React, { useEffect, useState } from "react";
import { DashCard, GGlink } from "../../../..";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Trophy, Target } from "lucide-react";

const MainContent: React.FC = () => {
  // chart
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Faild weeks", "Successful weeks"],
    datasets: [
      {
        label: "Votes",
        data: [20, 10], // Values for each section
        backgroundColor: ["#ff6384", "#36a2eb"], // Colors
        hoverBackgroundColor: ["#ff4f75", "#2b90d9"], // Hover colors
        borderWidth: 0,
        borderRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "bottom" as const,
        display: false,
      },
      title: {
        display: true,
        text: "Poll Results",
      },
    },
    cutout: "75%",
    layout: {
      padding: 10,
    },
  };

  // status of the commitment rate
  type status = "good" | "bad";
  const [rate, setRate] = useState<status | null>(null);
  const [highestScore, setHighestScore] = useState<number | null>(null);
  const [history, setHistory] = useState<number[] | null>([]);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setRate("good");
    setHighestScore(75);
    setHistory([90, 75, 55]);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [highestScore]);

  return (
    <div id="content" className="content min-h-screen flex flex-col ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        <div className="lg:col-span-8">
          <DashCard
            cardTitle="Commitment rate"
            cardClassName="average-rate-card relative"
          >
            <div className="custom-legend flex flex-col justify-center gap-4 mb-4 absolute bottom-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#ff6384] rounded-full"></span>
                <span className="text-sm font-bold text-gray-500">
                  Failed weeks
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#36a2eb] rounded-full"></span>
                <span className="text-sm font-bold text-gray-500">
                  Successful weeks
                </span>
              </div>
            </div>

            <div className="statistics justify-items-center relative">
              <div
                className={`status flex justify-center items-center absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full`}
              >
                {rate === "good" ? (
                  <span className="text-md lg:textlg text-green-500 font-bold">
                    Your are good , keep going !
                  </span>
                ) : (
                  <span className="text-sm lg:textlg text-red-500 font-bold">
                    you need to push more !
                  </span>
                )}
              </div>
              <div className="chart-wrapper h-full! flex justify-center items-center">
                <Doughnut
                  data={data}
                  options={options}
                  className="w-[300px]! h-[300px]!"
                />
              </div>
            </div>
          </DashCard>
        </div>
        <div className="lg:col-span-4">
          <DashCard cardTitle="Current progress" cardClassName="flex flex-col">
            <div className="wrapper grow flex flex-col justify-center">
              <div className="current-week">
                <h2 className="week font-bold text-xl lg:text-2xl my-4">
                  <Target className="inline mr-2" />
                  week 12
                </h2>
              </div>
              <div className="progress-bar w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`progress-value h-full bg-green-500 rounded-full w-[80%] transition-all`}
                ></div>
              </div>
              <span className="text-sm text-gray-500">80% completed</span>

              <GGlink
                title="Go !"
                className="text-white font-bold w-[120px]! h-[120px]! flex! justify-center items-center text-2xl lg:text-3xl rounded-full! mx-auto shadow-md!"
              />
            </div>
          </DashCard>
        </div>
      </div>
      <div className="relative grid grid-col-1 lg:grid-cols-12 gap-2 mt-2.5">
        <div className="lg:col-span-8">
          <DashCard
            cardTitle="Highest score"
            cardClassName="highest-score-card relative lg:flex lg:flex-col lg:justify-center"
          >
            <div className="score grow flex flex-col lg:flex-row items-center justify-evenly">
              <Trophy size={60} className="text-yellow-300 mb-5" />
              <div className="score-wrapper">
                <h2 className="week font-bold text-lg lg:text-2xl text-center">
                  week 12
                </h2>
                <div
                  className={`w-32 h-32 my-5 lg:my-2 rounded-full flex justify-center items-center shadow-md shadow-green-500 relative before:absolute before:content-[''] before:w-full before:h-full before:border-2 before:border-dashed before:border-green-500 before:rounded-full before:z-10 transition-all duration-900  ${
                    isAnimating
                      ? "scale-125 before:animate-spin before:[animation-duration:0.1s]!"
                      : "scale-100 before:animated-none"
                  }`}
                >
                  <span className={`font-bold text-2xl lg:text-4xl z-20`}>
                    {highestScore} %
                  </span>
                </div>
              </div>
            </div>
            <GGlink
              takeTo={"#"}
              title="See details"
              className="absolute right-0 bottom-0 text-white m-0! p-1! rounded-tr-2xl hover:translate-y-0! "
            />
          </DashCard>
        </div>

        <div className="lg:col-span-4">
          <DashCard
            cardTitle="history"
            cardClassName="history-card flex flex-col"
          >
            <div className="history grow flex flex-col items-center justify-evenly">
              <h2 className="week font-bold text-lg lg:text-2xl text-center">
                Previous weeks
              </h2>
              <div className="history-list w-full h-full overflow-y-auto flex flex-col justify-center ">
                <ul>
                  {history?.map((week, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-5 px-1 border-b border-gray-300 gap-3"
                    >
                      <span className="text-xl lg:2xl font-bold">
                        Week {index + 1}
                      </span>
                      <div className="progress-bar grow h-2 bg-gray-200 rounded-full">
                        <div
                          className={`progress-value h-full rounded-full transition-all bg-gray-400`}
                          style={{ width: `${week}%` }}
                        ></div>
                      </div>
                      <span className="font-bold">{week}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DashCard>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
