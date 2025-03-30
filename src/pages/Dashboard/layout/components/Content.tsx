import React, { use, useEffect, useState } from "react";
import { DashCard, FadeIn, GGlink } from "../../../..";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";

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
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Poll Results",
      },
    },
    cutout: "85%",
    spacing: "2",
  };

  // status of the commitment rate
  type status = "good" | "bad";
  const [rate, setRate] = useState<status | null>("good");
  const [highestScore, setHighestScore] = useState<number | null>(75);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [highestScore]);

  return (
    <div id="content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        <div className="lg:col-span-8">
          <DashCard
            cardTitle="Commitment rate"
            cardDes="blablabla"
            cardClassName="average-rate-card"
          >
            <div className="statistics justify-items-center relative">
              <div
                className={`status flex justify-center items-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full`}
              >
                {rate === "good" ? (
                  <span className="text-sm lg:textlg text-green-500 font-bold">
                    Your are good , keep going !
                  </span>
                ) : (
                  <span className="text-sm lg:textlg text-red-500 font-bold">
                    you need to push more !
                  </span>
                )}
              </div>
              <div className="chart-wrapper h-full!">
                <Doughnut data={data} options={options} className="" />
              </div>
            </div>
          </DashCard>
        </div>
        <div className="lg:col-span-4">
          <DashCard
            cardTitle="Highest score"
            cardClassName="highest-score-card relative lg:flex lg:flex-col lg:justify-center lg:items-center"
          >
            <div className="score flex-1 flex flex-col items-center justify-evenly">
              <Trophy size={60} className="text-yellow-300 mb-5" />
              <h2 className="week font-bold text-lg lg:text-2xl text-center">
                week 12
              </h2>
              <div
                className={`w-32 h-32 rounded-full flex justify-center items-center shadow-md shadow-green-500 relative before:absolute before:content-[''] before:w-full before:h-full before:border-2 before:border-dashed before:border-green-500 before:rounded-full before:z-10 transition-all duration-900  ${
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
            {/* <Link to="#" className="absolute right-0 bottom-0 bg-">see details</Link> */}
            <GGlink takeTo={'#'} title="See details" className="absolute right-0 bottom-0 text-white m-0! p-1! rounded-tr-2xl hover:translate-y-0! "/>
          </DashCard>
        </div>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-12 gap-2 mt-2">
        <div className="lg:col-span-8">
          <DashCard
            cardTitle="Current progress"
            cardClassName="current progress"
          >
            some content
          </DashCard>
        </div>
        <div className="lg:col-span-4">
          <DashCard cardTitle="history" cardClassName="history-card">
            some content
          </DashCard>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
