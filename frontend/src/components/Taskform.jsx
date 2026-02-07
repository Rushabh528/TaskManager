import { useState } from "react";
import axios from "axios";

function TaskForm({ refreshTasks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/tasks", {
            title,
            description,
            status: "pending"
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

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default TaskForm;