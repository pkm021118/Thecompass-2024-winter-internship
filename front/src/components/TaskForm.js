// TaskForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask, setPriorityFilter, setStatusFilter }) => {
    const handleAddTask = () => {
        const title = prompt('Enter task title:');
        if (!title) return;

        const description = prompt('Enter task description:');
        if (!description) return;

        const priority = prompt('Enter task priority (Low, Medium, High):');
        if (!priority || !['Low', 'Medium', 'High'].includes(priority)) return;

        const dueDate = prompt('Enter task due date (YYYY-MM-DD):');
        if (!dueDate) return;

        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            dueDate,
            status: '', // 초기 상태는 빈 값으로 설정
        };

        addTask(newTask);
    };

    return (
        <div className="mb-4">
            <button onClick={handleAddTask} className="w-full bg-blue-500 text-white py-2 rounded mb-4">
                Add Task
            </button>
            {/* 필터링 옵션 */}
            <div className="flex items-center bg-gray-200 p-3 rounded-md font-semibold text-center">
                <div className="w-1/2 flex items-center">
                    중요도
                    <select
                        onChange={(e) => setPriorityFilter(e.target.value)}
                        className="ml-2 border border-gray-300 rounded p-1"
                    >
                        <option value="All">All</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="w-1/2 flex items-center">
                    상태
                    <select
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="ml-2 border border-gray-300 rounded p-1"
                    >
                        <option value="All">All</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    setPriorityFilter: PropTypes.func.isRequired,
    setStatusFilter: PropTypes.func.isRequired,
};

export default TaskForm;
