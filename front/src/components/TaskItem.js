// TaskItem.js
import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, toggleTaskStatus, deleteTask }) => {
    return (
        <div className="p-4 rounded-lg shadow-md bg-white">
            <h4 className="text-lg font-semibold">{task.title}</h4>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate}</p>
            <label className="flex items-center mt-2">
                <input
                    type="checkbox"
                    checked={task.status === '마감'}
                    onChange={() => toggleTaskStatus(task.id)}
                    className="mr-2"
                />
                <span>{task.status === '마감' ? '마감' : '진행중'}</span>
            </label>
            <button
                onClick={() => deleteTask(task.id)}
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded-lg shadow hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    toggleTaskStatus: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
