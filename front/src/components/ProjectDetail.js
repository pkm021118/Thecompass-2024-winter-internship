// ProjectDetail.js
import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';

const ProjectDetail = ({ project }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [priorityFilter, setPriorityFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, projectId: project.id }]);
    };

    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, status: task.status === '' ? 'inProgress' : (task.status === 'inProgress' ? 'completed' : '') } : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const filteredTasks = tasks
        .filter(task => task.projectId === project.id)
        .filter(task => (priorityFilter === 'All' || task.priority === priorityFilter))
        .filter(task => (statusFilter === 'All' || task.status === statusFilter));

    return (
        <div>
            <h2 className="text-4xl font-bold mb-1">{project.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{new Date().toLocaleDateString()}</p>
            <TaskForm
                addTask={addTask}
                setPriorityFilter={setPriorityFilter}
                setStatusFilter={setStatusFilter}
            />
            <div className="task-list mt-4">
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTaskStatus={toggleTaskStatus}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
