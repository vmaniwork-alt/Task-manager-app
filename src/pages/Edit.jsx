import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit({ tasks, updateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskToEdit = tasks.find((t) => t.id === Number(id));

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ id: taskToEdit.id, title, description, status });
    navigate("/");
  };

  if (!taskToEdit) return <p>Task not found!</p>;

  return (
    <div className="max-w-lg w-full mx-auto mt-10 border p-5 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Edit Task</h1>
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
          Update Task
        </button>
      </form>
    </div>
  );
}