import axios from "axios";

function TaskList({ tasks, refreshTasks }) {

    const deleteTask = async (id) => {
        await axios.delete(`https://taskmanager-eiip.onrender.com/tasks/${id}`);
        refreshTasks();
    };

    return (
        <div>
            <h2>Tasks</h2>

            {tasks.map(task => (
                <div className="card task" key={task._id}>
                    <div className="task-info">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p className={`status-badge ${task.status}`}>
                            {task.status}
                        </p>
                    </div>

                    <button
                        className="delete-btn"
                        onClick={() => deleteTask(task._id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;