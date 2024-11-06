import React from 'react';
import PropTypes from 'prop-types';

const priorityColors = {
    "매우높음": "#EF2A2A",
    "높음": "#EF892A",
    "낮음": "#DBA967",
    "매우낮음": "#A08888",
};

const TaskItem = ({ task, toggleTaskStatus, deleteTask }) => {
    // 날짜 문자열을 파싱하는 함수
    const parseDateString = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return new Date(year, month - 1, day);
    };

    const now = new Date();
    const dueDate = parseDateString(task.dueDate);

    const timeDiff = dueDate.getTime() - now.getTime();
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

    const isOverdue = dayDiff < 0;
    const isDueSoon = dayDiff >= 0 && dayDiff <= 3;

    return (
        <div className="p-4 rounded-lg shadow-md bg-white">
            <h4 className="text-lg font-semibold">
                {isOverdue && <span style={{ color: 'red', marginRight: '5px' }}>!</span>}
                {task.title}
            </h4>
            <p>{task.description}</p>
            <p
                className="font-semibold"
                style={{ color: priorityColors[task.priority] }}
            >
                중요도: {task.priority}
            </p>
            <p style={{ color: isOverdue || isDueSoon ? 'red' : 'inherit' }}>
                Due Date: {task.dueDate}
            </p>
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
