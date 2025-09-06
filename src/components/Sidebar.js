import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'daily-routine', label: 'Daily Routine', icon: '📅' },
    { id: 'expenses', label: 'Expenses', icon: '💰' },
    { id: 'interview-prep', label: 'Interview Prep', icon: '🎤' }
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">SmartLife AI</h2>
        <p className="text-sm text-gray-600">Dashboard</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-500'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                <span className="text-xl mr-3">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
