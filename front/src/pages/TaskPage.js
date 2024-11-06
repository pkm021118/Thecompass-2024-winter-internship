// TaskPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import logo from '../assets/logo.svg';

const TaskPage = () => {
    const { projectId } = useParams();

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
        setTasks([...tasks, { ...newTask, projectId: Number(projectId) }]);
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
        .filter(task => task.projectId === Number(projectId))
        .filter(task => (priorityFilter === 'All' || task.priority === priorityFilter))
        .filter(task => (statusFilter === 'All' || task.status === statusFilter));

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="sidebar bg-blue-500 text-white p-4 flex flex-col items-start rounded-r-2xl w-1/5">
                <img src={logo} alt="Navigation Logo" className="w-24 h-24 mb-4" />
                <ul className="mt-8 space-y-2">
                    <li>
                        <Link to="/projects" className="text-lg font-medium hover:bg-blue-600 p-2 rounded w-full block text-left">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/tasks" className="text-lg font-medium hover:bg-blue-600 p-2 rounded w-full block text-left">
                            Tasks
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content flex-1 p-8">
                <h2 className="text-3xl font-semibold mb-6">Tasks for Project {projectId}</h2>

                <TaskForm addTask={addTask} setPriorityFilter={setPriorityFilter} setStatusFilter={setStatusFilter} />

                <div className="task-list space-y-4 mt-4">
                    {filteredTasks.length > 0 ? (
                        filteredTasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                toggleTaskStatus={toggleTaskStatus}
                                deleteTask={deleteTask}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 mt-4">No tasks available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskPage;
