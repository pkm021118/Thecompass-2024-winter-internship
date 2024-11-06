import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const TaskPage = () => {
    const { projectId } = useParams();
    const { tasks } = useTasks();

    return (
        <div>
            <h2>Tasks for Project {projectId}</h2>
            <TaskForm projectId={projectId} />
            <TaskList tasks={tasks.filter(task => task.projectId === Number(projectId))} />
        </div>
    );
};

export default TaskPage;
