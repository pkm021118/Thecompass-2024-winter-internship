import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const ProjectDetail = ({ project }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, projectId: project.id }]);
    };

    const filteredTasks = tasks.filter((task) => task.projectId === project.id);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
            <TaskForm addTask={addTask} />
            <div className="task-list mt-4">
                {filteredTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
