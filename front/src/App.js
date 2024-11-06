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
                    <div className="min-h-screen bg-gray-100 text-gray-900">
                        <div className="max-w-7xl mx-auto p-4">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/projects/:projectId" element={<TaskPage />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </TaskProvider>
        </ProjectProvider>
    );
}

export default App;
