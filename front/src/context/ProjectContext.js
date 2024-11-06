import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', tasks: [] },
        { id: 2, name: 'Project B', tasks: [] },
    ]);

    const addProject = (name) => {
        const newProject = { id: projects.length + 1, name, tasks: [] };
        setProjects([...projects, newProject]);
    };

    const deleteProject = (projectId) => {
        setProjects(projects.filter((project) => project.id !== projectId));
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, deleteProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => useContext(ProjectContext);
