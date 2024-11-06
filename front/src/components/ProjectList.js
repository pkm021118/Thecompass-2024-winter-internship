import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';

const ProjectList = () => {
    const { projects, deleteProject } = useProjects();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
                <div key={project.id} className="bg-white shadow-md rounded-lg p-4">
                    <Link to={`/projects/${project.id}`}>
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    </Link>
                    <button
                        onClick={() => deleteProject(project.id)}
                        className="mt-4 text-sm text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
