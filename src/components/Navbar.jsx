import { ThemeUse } from "../context/themecontext.jsx";
import { useAuth } from "../context/authcontext.jsx";
import { useNavigate } from 'react-router-dom'; // 
import { assets } from '../assets/assets.js';

export const Navbar = () => {
    const { darkmode, toggleTheme} = ThemeUse();
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
   <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      
      {/* App Title */}
      <div
        className="text-2xl font-semibold text-gray-800 dark:text-white cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition"
        onClick={() => navigate('/')}
      >
        Todo App
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        
        {/* Theme Toggle */}
        <button
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={toggleTheme}
        >
          <img
            src={darkmode ? assets.light_icon : assets.dark_icon}
            alt="theme-icon"
            className="w-6 h-6"
          />
        </button>

        {/* Auth Buttons */}
        {user ? (
          <button
            className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition"
            onClick={() => logout()}
          >
            Logout
          </button>
        ) : (
          <>
            <button
              className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 transition"
              onClick={() => navigate('/login')}
            >
              Signin
            </button>
            <button
              className="px-3 sm:px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md dark:bg-green-500 dark:hover:bg-green-600 transition"
              onClick={() => navigate('/register')}
            >
              Signup
            </button>
          </>
        )}
      </div>
    </div>
  </div>
</nav>



    );
};
