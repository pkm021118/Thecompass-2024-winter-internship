import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import logo from '../assets/logo.svg';

const TaskPage = () => {
    const { projectId } = useParams();

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const filteredTasks = tasks.filter((task) => task.projectId === Number(projectId));

    return (
        <div className="container">
            <div className="sidebar">
                <img src={logo} alt="Navigation Logo" className="w-24 h-24 mb-4" />
                <ul className="space-y-2">
                    <li>Projects</li>
                    <li>Tasks</li>
                </ul>
            </div>
            <div className="content">
                <h2 className="text-3xl font-semibold mb-6">Tasks for Project {projectId}</h2>

                <TaskForm tasks={tasks} setTasks={setTasks} projectId={projectId} />

                <div className="task-list space-y-4 mt-4">
                    {filteredTasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TaskPage;
