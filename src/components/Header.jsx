import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../auth/firebase'; 

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); 
    });

    return () => unsubscribe();
  }, []);

  if (!isLoggedIn) {
    return null; 
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='sticky top-0 z-10 bg-gray-800'>
      
      <div className="lg:hidden flex items-center p-4">
        <button onClick={toggleSidebar} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 text-white p-4 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:w-64 lg:h-screen lg:block`}
      >
       
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-white text-2xl md:hidden"
        >
          &times;
        </button>

        <Link to="/home" className="mb-4" onClick={closeSidebar}>
          <div className="hover:bg-gray-700 p-2 rounded">Students Page</div>
        </Link>
        <Link to="/logout" onClick={closeSidebar}>
          <div className="hover:bg-gray-700 p-2 rounded">Logout</div>
        </Link>
      </div>

      <div className={`lg:ml-64 ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
        
      </div>
    </div>
  );
}

export default Header;
