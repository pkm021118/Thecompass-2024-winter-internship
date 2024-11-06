import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';

const TaskPage = () => {
    const { projectId } = useParams();
    const { tasks } = useTasks();

    // 해당 projectId에 속하는 태스크만 필터링
    const filteredTasks = tasks.filter(task => task.projectId === Number(projectId));

    return (
        <div>
            <h2>Tasks for Project {projectId}</h2>
            <TaskForm projectId={Number(projectId)} />
            <TaskList tasks={filteredTasks} />
        </div>
    );
};

export default TaskPage;
