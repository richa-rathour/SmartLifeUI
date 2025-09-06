import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">SmartLife AI Dashboard</h1>
          <p className="text-sm text-gray-600">Your personal productivity companion</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">U</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-800">User Profile</p>
            <p className="text-xs text-gray-600">Online</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
