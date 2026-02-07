/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/Taskform";
import TaskList from "./components/Tasklist";

function App() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await axios.get("http://localhost:5000/tasks");
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="container">
            <h1>Task Manager</h1>
            <TaskForm refreshTasks={fetchTasks} />
            <TaskList tasks={tasks} refreshTasks={fetchTasks} />
        </div>
    );
}

export default App;