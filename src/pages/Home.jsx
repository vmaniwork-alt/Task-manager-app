import { Link } from "react-router-dom";
import TaskTable from "../components/TaskTable";
import { useState } from "react";

export default function Home({ tasks, deleteTask }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredTasks = (tasks || []).filter((task) => {
    const matchesSearch = task.title?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" ? true : task.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-6xl w-full mx-auto mt-10 px-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <Link to="/create" className="bg-green-500 text-white px-3 py-1 rounded">
          Create Task
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by Title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <TaskTable tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}