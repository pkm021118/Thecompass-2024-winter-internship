import React from 'react';
import ProjectList from '../components/ProjectList';
import { useProjects } from '../context/ProjectContext';

const ProjectPage = () => {
    const { addProject } = useProjects();

    const handleAddProject = () => {
        const name = prompt('Enter project name:');
        if (name) addProject(name);
    };

    return (
        <div>
            <h1>Projects</h1>
            <ProjectList />
            <button onClick={handleAddProject}>Add Project</button>
        </div>
    );
};

export default ProjectPage;
