import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ tasks }) => {
    const { deleteTask, updateTaskStatus } = useTasks();

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} style={{ marginBottom: '10px' }}>
                    <h4>{task.title}</h4>
                    <p>Priority: {task.priority}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => updateTaskStatus(task.id, task.status === 'completed' ? 'inProgress' : 'completed')}>
                        {task.status === 'completed' ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TaskItem;
