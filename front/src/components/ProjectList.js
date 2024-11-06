import React from 'react';
import { Link } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';

const ProjectList = () => {
    const { projects, deleteProject } = useProjects();

    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    <button onClick={() => deleteProject(project.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
