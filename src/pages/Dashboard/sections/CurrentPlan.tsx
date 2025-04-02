import React, { useState } from "react";
import { useTheme } from "../../../components/ThemeProvider";
const CurrentPlan: React.FC = () => {
  const { theme } = useTheme();

  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish Project X", progress: 0 },
    { id: 2, title: "Workout for 7 Days", progress: 0 },
    { id: 3, title: "Read Book Y", progress: 0 },
    // { id: 4, title: "Meditate Daily", progress: 0 },
    // { id: 4, title: "Meditate Daily", progress: 0 },
  ]);

  const averageProgress =
    tasks.reduce((sum, task) => sum + task.progress, 0) / tasks.length;

  const handleProgressChange = (id: number, value: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, progress: value } : task
      )
    );
  };

  const handleTaskSubmit = (id: number) => {
    alert(`Task ${id} progress submitted!`);
  };

  const handleWeekSubmit = () => {
    alert("Week progress submitted!");
  };

  return (
    <div
      className={`relative grid grid-cols-1 lg:grid-cols-12 gap-1.5 ${
        theme === "dark" ? "text-white" : ""
      }`}
    >
      <div className="lg:col-span-9 lg:mt-14">
        <h2 className="lg:absolute lg:top-0 lg:left-0 font-bold text-xl lg:text-2xl my-3 ">
          🎯 Week 2
        </h2>
        <div className="tasks space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task p-4 rounded-lg shadow-md flex flex-col space-y-3 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            >
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={task.progress}
                  onChange={(e) =>
                    handleProgressChange(task.id, Number(e.target.value))
                  }
                  className="w-full"
                />
                <span className="text-sm font-medium">{task.progress}%</span>
              </div>
              <button
                onClick={() => handleTaskSubmit(task.id)}
                className={`px-4 py-2 rounded-2xl cursor-pointer font-semibold hover:-translate-y-1 transition-all ${
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Submit Task
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3 lg:mt-14 flex flex-col gap-2">
        <div
          className={`result p-6 rounded-lg shadow-md flex flex-col items-center space-y-4 ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <h3 className="font-bold text-xl">📊 Week Score</h3>
          <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-500 h-full"
              style={{ width: `${averageProgress}%` }}
            ></div>
          </div>
          <p className="text-2xl my-6 font-semibold text-green-600">
            {averageProgress.toFixed(2)}%
          </p>
          <button
            onClick={handleWeekSubmit}
            className={`px-4 py-2 rounded-2xl cursor-pointer font-semibold hover:-translate-y-1 transition-all ${
              theme === "light" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            Submit Week
          </button>
        </div>

        <div
          className={`summary p-6 grow rounded-lg shadow-md flex flex-col items-center justify-center space-y-5 ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <h3 className="font-bold text-xl lg:text-2xl">📋 Summary</h3>
          <p className="text-md">
            Total Tasks: <span className="font-semibold">{tasks.length}</span>
          </p>
          <p className="text-md">
            Completed Tasks:{" "}
            <span className="font-semibold">
              {tasks.filter((task) => task.progress === 100).length}
            </span>
          </p>
          <p className="text-md">
            Remaining Tasks:{" "}
            <span className="font-semibold">
              {tasks.filter((task) => task.progress < 100).length}
            </span>
          </p>
          <p className="text-sm text-green-500 text-center">
            {averageProgress >= 70
              ? "🔥 You're doing great! Keep it up!"
              : "💪 Stay consistent and keep pushing forward!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPlan;
