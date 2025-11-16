import { Link } from "react-router-dom";

export default function TaskTable({ tasks, deleteTask }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-200 ">
          <tr>
            <th className="p-2 border text-left">Title</th>
            <th className="p-2 border text-left">Description</th>
            <th className="p-2 border text-left">Status</th>
            <th className="p-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No tasks found
              </td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr key={task.id} className="odd:bg-white even:bg-gray-50">
                <td className="p-2 border">{task.title}</td>
                <td className="p-2 border">{task.description}</td>
                <td className="p-2 border">{task.status}</td>
                <td className="p-2 border flex flex-wrap gap-2">
                  <Link
                    to={`/edit/${task.id}`}
                    className="px-1.5 md:px-2 py-1 bg-yellow-300 text-black rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-1 md:px-2 py-1 bg-red-500 text-white rounded "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}