import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ tasks }) => {
    const { deleteTask, updateTaskStatus } = useTasks();

    return (
        <div className="space-y-4">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className={`p-4 rounded-lg shadow-md ${
                        task.status === 'completed' ? 'bg-green-100' : 'bg-white'
                    }`}
                >
                    <h4 className="text-lg font-semibold">{task.title}</h4>
                    <p className="text-sm text-gray-600">Priority: {task.priority}</p>
                    <p className="text-sm text-gray-600">Status: {task.status}</p>
                    <div className="flex justify-end space-x-2 mt-2">
                        <button
                            onClick={() => updateTaskStatus(task.id, task.status === 'completed' ? 'inProgress' : 'completed')}
                            className={`text-sm py-1 px-2 rounded ${
                                task.status === 'completed' ? 'bg-gray-300' : 'bg-blue-500 text-white'
                            }`}
                        >
                            {task.status === 'completed' ? 'Undo' : 'Complete'}
                        </button>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="text-sm py-1 px-2 text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskItem;
