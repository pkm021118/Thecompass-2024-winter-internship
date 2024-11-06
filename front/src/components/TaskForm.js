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
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2">Add New Task</h4>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-2"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-4"
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
