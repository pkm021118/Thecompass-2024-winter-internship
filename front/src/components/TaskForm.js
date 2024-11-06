import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = ({ projectId }) => {
    const { addTask } = useTasks();
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ id: Date.now(), title, priority, projectId, status: 'inProgress' });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
