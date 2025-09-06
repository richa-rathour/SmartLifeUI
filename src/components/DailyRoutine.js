import React, { useState } from 'react';

const DailyRoutine = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Morning Exercise', time: '07:00', completed: false },
    { id: 2, title: 'Review Daily Goals', time: '08:30', completed: true },
    { id: 3, title: 'Team Standup', time: '09:00', completed: false },
    { id: 4, title: 'Lunch Break', time: '12:30', completed: false },
    { id: 5, title: 'Evening Walk', time: '18:00', completed: false }
  ]);

  const [newTask, setNewTask] = useState({ title: '', time: '' });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title.trim() && newTask.time.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.title,
        time: newTask.time,
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask({ title: '', time: '' });
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Daily Routine</h2>
        <p className="text-gray-600">Manage your daily tasks and build healthy habits</p>
      </div>

      {/* Add Task Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Task</h3>
        <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Task title..."
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="sm:w-32">
            <input
              type="time"
              value={newTask.time}
              onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
          >
            Add Task
          </button>
        </form>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Tasks</h3>
        {tasks.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-6xl mb-4">📝</div>
            <p>No tasks yet. Add your first task above!</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white rounded-lg shadow-md p-4 transition-all duration-200 hover:shadow-lg ${
                task.completed ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 text-primary-500 rounded focus:ring-primary-500"
                  />
                  <div>
                    <h4 className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.title}
                    </h4>
                    <p className="text-sm text-gray-600">⏰ {task.time}</p>
                  </div>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 p-1 rounded transition-colors duration-200"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Progress Summary */}
      <div className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Today's Progress</h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-white rounded-full h-3 overflow-hidden">
            <div 
              className="bg-primary-500 h-full transition-all duration-500"
              style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {tasks.filter(t => t.completed).length} / {tasks.length} completed
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyRoutine;
