import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';
import { ProjectProvider } from './context/ProjectContext';
import { TaskProvider } from './context/TaskContext';

function App() {
    return (
        <ProjectProvider>
            <TaskProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects/:projectId" element={<TaskPage />} />
                    </Routes>
                </Router>
            </TaskProvider>
        </ProjectProvider>
    );
}

export default App;
