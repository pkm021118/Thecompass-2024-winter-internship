import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('Low');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            priority,
            dueDate,
            status: 'inProgress',
        };

        addTask(newTask);

        setTitle('');
        setPriority('Low');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-2"
                required
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-2"
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded mb-4"
                required
            />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                Add Task
            </button>
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default TaskForm;
