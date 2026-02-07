import { useState } from "react";
import axios from "axios";

function TaskForm({ refreshTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/tasks", {
            title,
            description,
            status
        });

        setTitle("");
        setDescription("");
        refreshTasks();
    };

    return (
        <div className="card">
            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    className="status-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TaskForm;