import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, status });
    navigate("/");
  };

  return (
    <div className="max-w-lg w-full mx-auto mt-10 border p-5 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Create Task</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-2 rounded w-full"
          required
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 w-full"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}