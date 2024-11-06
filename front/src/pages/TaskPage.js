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
        setTasks((prevTasks) => [...prevTasks, { ...newTask, projectId: Number(projectId) }]);
    };

    const toggleTaskStatus = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId
                    ? { ...task, status: task.status === '진행중' ? '마감' : '진행중' }
                    : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    // 우선순위를 계산하는 함수
    const getTaskPriority = (task) => {
        const now = new Date();
        const dueDate = new Date(task.dueDate);

        const timeDiff = dueDate.getTime() - now.getTime();
        const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

        if (dayDiff < 0) {
            return 1; // 마감기한이 지난 작업
        } else if (dayDiff <= 3) {
            return 2; // 마감기한이 3일 이내인 작업
        } else {
            return 3; // 기타 작업
        }
    };

    // 필터링 및 정렬된 작업 목록
    const filteredTasks = tasks
        .filter((task) => task.projectId === Number(projectId))
        .filter((task) => priorityFilter === 'All' || task.priority === priorityFilter)
        .filter((task) => statusFilter === 'All' || task.status === statusFilter)
        .sort((a, b) => {
            const aPriority = getTaskPriority(a);
            const bPriority = getTaskPriority(b);

            if (aPriority !== bPriority) {
                return aPriority - bPriority; // 우선순위에 따라 정렬
            } else {
                const aDueDate = new Date(a.dueDate);
                const bDueDate = new Date(b.dueDate);
                return aDueDate - bDueDate; // 동일한 우선순위인 경우 마감기한 순으로 정렬
            }
        });

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* 사이드바 및 기타 내용은 기존 코드와 동일 */}
            {/* ... */}
            <div className="content flex-1 p-8">
                <h2 className="text-3xl font-semibold mb-6">Tasks for Project {projectId}</h2>

                <TaskForm
                    addTask={addTask}
                    setPriorityFilter={setPriorityFilter}
                    setStatusFilter={setStatusFilter}
                />

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
