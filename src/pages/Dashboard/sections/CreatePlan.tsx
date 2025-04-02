import React, { useState } from "react";
import { useTheme } from "../../../components/ThemeProvider";
import { Trash, Edit3, Check, X } from "lucide-react";

const CreatePlan: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; title: string; progress: number }[]
  >([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [targetWeek, setTargetWeek] = useState("");

  // Validation states
  const [weekError, setWeekError] = useState("");
  const [taskError, setTaskError] = useState("");

  // Editing states
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");

  const handleAddWeek = () => {
    if (
      !targetWeek.trim() ||
      isNaN(Number(targetWeek)) ||
      Number(targetWeek) <= 0
    ) 
    {
        setWeekError("Please enter a valid week number!");
        return;
    }
    else if(!targetWeek){
        setWeekError("Week can not be empty !");

    }

    setWeekError(""); // Clear the error if valid
    alert(`Plan created for Week ${targetWeek}`);
    setTargetWeek(""); // Clear the input field
  };

  const handleAddTask = () => {
    if (taskTitle.trim() === "") {
      setTaskError("Task title cannot be empty!");
      return;
    }

    setTaskError(""); // Clear the error if valid
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      progress: 0, // Default progress is 0%
    };

    setTasks([...tasks, newTask]);
    setTaskTitle(""); // Clear the input field
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: number, title: string) => {
    setEditingTaskId(id);
    setEditedTaskTitle(title); // Pre-fill the input with the current task title
  };

  const handleSaveTask = (id: number) => {
    if (editedTaskTitle.trim() === "") {
      alert("Task title cannot be empty!");
      return;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title: editedTaskTitle } : task
      )
    );
    setEditingTaskId(null); // Exit editing mode
    setEditedTaskTitle(""); // Clear the edited title
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null); // Exit editing mode
    setEditedTaskTitle(""); // Clear the edited title
  };

  const handleSubmitPlan = () => {
    if (tasks.length === 0) {
      setTaskError("You must add at least one task to create a plan!");
      return;
    }

    setTaskError(""); // Clear the error if valid
    alert("Plan submitted successfully!");
    console.log("Submitted Plan:", tasks);

    // Clear the tasks after submission
    setTasks([]);
  };

  const { theme } = useTheme();

  return (
    <div
      className={`p-6 space-y-6 ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      <h2 className="text-2xl font-bold">📝 Create Your Plan</h2>

      {/* Week Input */}
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <input
            required
            type="text"
            value={targetWeek}
            onChange={(e) => setTargetWeek(e.target.value)}
            placeholder="Enter target week (e.g., Week 1)"
            className={`flex-grow p-2 border! rounded-md ${
              weekError ? "border-red-500!" : "border-gray-600!"
            }`}
          />
          <button
            onClick={handleAddWeek}
            className={`px-4 py-2 ${
              theme === "light" ? "bg-black text-white" : "bg-white text-black"
            } rounded-xl`}
          >
            Set Week
          </button>
        </div>
        {weekError && <p className="text-red-500 text-sm">{weekError}</p>}
      </div>

      {/* Task Input */}
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className={`flex-grow p-2 border! rounded-md ${
              taskError ? "border-red-500!" : "border-gray-300!"
            }`}
          />
          <button
            onClick={handleAddTask}
            className={`px-4 py-2 ${
              theme === "light" ? "bg-black text-white" : "bg-white text-black"
            } rounded-xl`}
          >
            Add Task
          </button>
        </div>
        {taskError && <p className="text-red-500 text-sm">{taskError}</p>}
      </div>

      {/* Task List Preview */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">📋 Tasks</h3>
        {tasks.length === 0 ? (
          <p className="text-gray-500">
            No tasks added yet. Start by adding a task above.
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-4 ${
                  theme === "light" ? "bg-white" : "bg-black"
                } rounded-2xl shadow-sm`}
              >
                {editingTaskId === task.id ? (
                  <div className="flex items-center space-x-4 flex-grow">
                    <input
                      type="text"
                      value={editedTaskTitle}
                      onChange={(e) => setEditedTaskTitle(e.target.value)}
                      className="flex-grow p-2 border rounded-md border-gray-300"
                    />
                    <button
                      onClick={() => handleSaveTask(task.id)}
                      className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
                    >
                      <Check />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    >
                      <X />
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="font-medium">{task.title}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEditTask(task.id, task.title)}
                        className="bg-yellow-400 cursor-pointer text-white p-2 rounded-md hover:bg-yellow-500"
                      >
                        <Edit3 />
                      </button>
                      <button
                        onClick={() => handleRemoveTask(task.id)}
                        className="bg-red-400 cursor-pointer text-white p-2 rounded-md hover:bg-red-500"
                      >
                        <Trash />
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Submit Plan */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmitPlan}
          className="px-6 py-3 bg-black text-white rounded-xl cursor-pointer"
        >
          Submit Plan
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;
