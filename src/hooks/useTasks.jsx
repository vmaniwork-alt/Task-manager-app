import { useState, useEffect } from "react";

export default function useTasks() {
  // Load tasks from localStorage or empty array
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return { tasks, addTask, updateTask, deleteTask };
}