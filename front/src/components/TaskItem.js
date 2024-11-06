import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
    return (
        <div className="p-4 rounded-lg shadow-md bg-white">
            <h4 className="text-lg font-semibold">{task.title}</h4>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Due Date: {task.dueDate}</p>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskItem;
