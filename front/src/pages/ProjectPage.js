import React, { useState } from 'react';
import ProjectList from '../components/ProjectList';
import ProjectDetail from '../components/ProjectDetail';
import logo from '../assets/logo.svg';

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
