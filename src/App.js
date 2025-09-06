import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DailyRoutine from './components/DailyRoutine';
import Expenses from './components/Expenses';
import InterviewPrep from './components/InterviewPrep';

function App() {
  const [activeTab, setActiveTab] = useState('daily-routine');

  const renderContent = () => {
    switch (activeTab) {
      case 'daily-routine':
        return <DailyRoutine />;
      case 'expenses':
        return <Expenses />;
      case 'interview-prep':
        return <InterviewPrep />;
      default:
        return <DailyRoutine />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />
          
          {/* Content Area */}
          <main className="flex-1 overflow-y-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
