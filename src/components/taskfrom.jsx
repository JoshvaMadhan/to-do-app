import { useState, useEffect } from "react";

export const TaskForm = ({ AnaddTodo, etask }) => {
    const [todo, setDescription] = useState(etask?.todo ?? '');
    const [status, setStatus] = useState(etask?.status ?? "assigned");

    useEffect(() => {
        setDescription(etask?.todo ?? '');
        setStatus(etask?.status ?? "assigned");
    }, [etask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim() === "") {
            alert("Description should not be empty");
            return;
        }
        AnaddTodo({ todo, status });
        setDescription("");
        setStatus('assigned');
    };

    return (
        <div className="maindiv max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="head1 text-2xl font-bold mb-4 text-center text-indigo-600">
                {etask ? 'Edit Todo' : 'Add Todo'}
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="from1 mb-4">
                    <label htmlFor="desc" className="lab1 block mb-2 font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="desc"
                        value={todo}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        rows="3"
                    />
                </div>
                <div className="subdiv mb-4">
                    <label htmlFor="status" className="lab2 block mb-2 font-medium text-gray-700">
                        Status
                    </label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="assigned">assigned</option>
                        <option value="started">started</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="but1 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
                >
                    {etask ? 'Edit Todo' : 'Add Todo'}
                </button>
            </form>
        </div>
    );
};
