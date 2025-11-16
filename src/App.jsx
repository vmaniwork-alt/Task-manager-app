import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {


  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});


  const updateTask = (updatedTask) => {
  const updatedTasks = tasks.map((t) =>
    t.id === updatedTask.id ? updatedTask : t
  );
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

 
 const deleteTask = (id) => {
  const updatedTasks = tasks.filter((t) => t.id !== id);
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
const addTask = (task) => {
  const updatedTasks = [...tasks, { ...task, id: Date.now() }];
  setTasks(updatedTasks);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};

  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home tasks={tasks} deleteTask={deleteTask} />} />
    <Route path="/create" element={<Create addTask={addTask} />} />
    <Route
      path="/edit/:id"
      element={<Edit tasks={tasks} updateTask={updateTask} />}
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;