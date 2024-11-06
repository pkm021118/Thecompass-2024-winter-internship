import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        if (name) {
            const newProject = { id: Date.now(), name };
            setProjects([...projects, newProject]);
        }
    };

    return (
        <div>
            <button onClick={addProject} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Add Project
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
                        onClick={() => onSelectProject(project)}
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
