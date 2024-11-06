import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';
import ProjectDetail from '../components/ProjectDetail';
import logo from '../assets/logo.svg';

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const showProjectList = () => {
        setSelectedProject(null);
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-100">
            <div className="container bg-white rounded-2xl shadow-lg flex max-w-5xl w-full">
                <div className="sidebar bg-blue-500 text-white p-4 flex flex-col items-start rounded-l-2xl w-1/5">
                    <img src={logo} alt="Navigation Logo" className="w-24 h-24 mb-4" />
                    <ul className="mt-8 space-y-2">
                        <li>
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
                <div className="content flex-1 p-8">
                    <div className="w-full">
                        {selectedProject ? (
                            <ProjectDetail project={selectedProject} />
                        ) : (
                            <ProjectList onSelectProject={setSelectedProject} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
