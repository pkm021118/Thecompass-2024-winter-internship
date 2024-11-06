import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import ProjectDetail from '../components/ProjectDetail';
import logo from '../assets/logo.svg';

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const showProjectList = () => {
        setSelectedProject(null); // selectedProject 상태를 null로 설정하여 리스트를 표시
    };

    return (
        <div className="container">
            <div className="sidebar">
                <img src={logo} alt="Navigation Logo" className="w-24 h-24 mb-4" />
                <ul className="space-y-2">
                    <li>
                        {/* Projects 링크 클릭 시 리스트 모드로 전환 */}
                        <button
                            onClick={showProjectList}
                            className="text-lg font-medium hover:bg-blue-600 p-2 rounded w-full block text-left"
                        >
                            Projects
                        </button>
                    </li>
                    <li>
                        <Link to="/tasks" className="text-lg font-medium hover:bg-blue-600 p-2 rounded w-full block">
                            Tasks
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <h1 className="text-3xl font-semibold mb-6">Projects</h1>
                {selectedProject ? (
                    <ProjectDetail project={selectedProject} />
                ) : (
                    <ProjectList onSelectProject={setSelectedProject} />
                )}
            </div>
        </div>
    );
};

export default ProjectPage;
