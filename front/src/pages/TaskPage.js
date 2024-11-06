import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const TaskPage = () => {
    const { projectId } = useParams();
    const { tasks } = useTasks();

    const filteredTasks = tasks.filter((task) => task.projectId === Number(projectId));

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Tasks for Project {projectId}</h2>
            <TaskForm projectId={Number(projectId)} />
            <TaskItem tasks={filteredTasks} />
        </div>
    );
};

export default TaskPage;
