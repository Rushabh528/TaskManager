/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/Taskform";
import TaskList from "./components/Tasklist";

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");
    const filteredTasks =
        filter === "all"
            ? tasks
            : tasks.filter(task => task.status === filter);
    const fetchTasks = async () => {
        const res = await axios.get("https://taskmanager-eiip.onrender.com/tasks");
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm refreshTasks={fetchTasks} />
            <div className="filter-bar">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
            </div>
            <TaskList tasks={filteredTasks} refreshTasks={fetchTasks} />
        </div>
    );
}

export default App;