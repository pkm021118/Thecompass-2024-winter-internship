import React, { useState, useEffect } from 'react';
import { format, isValid } from 'date-fns';

const ProjectList = ({ onSelectProject }) => {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const addProject = () => {
        const name = prompt('Enter project name:');
        const description = prompt('Enter project description:');
        if (name && description) {
            const newProject = {
                id: Date.now(),
                name,
                description,
                startDate: new Date().toISOString(),
                status: '진행중'
            };
            setProjects([...projects, newProject]);
        }
    };

    const deleteProject = (projectId) => {
        setProjects(projects.filter((project) => project.id !== projectId));
    };

    const updateStatus = (projectId, newStatus) => {
        setProjects(
            projects.map((project) =>
                project.id === projectId ? { ...project, status: newStatus } : project
            )
        );
    };

    const currentDate = format(new Date(), 'MMMM dd, yyyy');

    return (
        <div className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6">
                <h1 className="text-4xl font-bold">Projects</h1>
                <p className="text-sm text-gray-500 mt-1">{currentDate}</p>
            </div>

            <button
                onClick={addProject}
                className="absolute top-6 right-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
            >
                프로젝트 생성
            </button>

            {/* 회색 가로 막대 */}
            <div className="flex bg-gray-200 p-2 mt-6 rounded-md font-semibold text-center">
                <div className="w-1/4">이름</div>
                <div className="w-1/4">상세</div>
                <div className="w-1/4">시작일</div>
                <div className="w-1/4">상태</div>
            </div>

            {/* 프로젝트 목록 */}
            <div className="mt-2">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => onSelectProject(project)}  // 프로젝트 클릭 시 onSelectProject 호출
                        className="flex items-center bg-gray-100 shadow-md rounded-lg p-4 border border-gray-300 w-full mt-2 cursor-pointer hover:bg-gray-200"
                    >
                        <div className="w-1/4 text-center">{project.name}</div>
                        <div className="w-1/4 text-center">{project.description}</div>
                        <div className="w-1/4 text-center">
                            {isValid(new Date(project.startDate)) ? format(new Date(project.startDate), 'yyyy-MM-dd') : 'N/A'}
                        </div>
                        <div className="w-1/4 text-center">
                            <select
                                value={project.status}
                                onChange={(e) => updateStatus(project.id, e.target.value)}
                                className="border rounded p-1"
                                onClick={(e) => e.stopPropagation()}  // 상태 변경 시 프로젝트 선택 방지
                            >
                                <option value="진행중">진행중</option>
                                <option value="마감">마감</option>
                            </select>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();  // 삭제 버튼 클릭 시 프로젝트 선택 방지
                                deleteProject(project.id);
                            }}
                            className="ml-4 bg-red-500 text-white py-1 px-4 rounded-lg shadow hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
