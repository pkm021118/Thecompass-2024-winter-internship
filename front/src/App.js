import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import TaskPage from './pages/TaskPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 text-gray-900">
                <div className="max-w-7xl mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<ProjectPage />} />
                        <Route path="/projects/:projectId" element={<TaskPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
