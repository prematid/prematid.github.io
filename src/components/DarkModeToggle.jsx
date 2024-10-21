// src/components/DarkModeToggle.jsx
import { useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark', !darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <button onClick={toggleDarkMode} className="ml-auto p-2 bg-gray-800 text-white rounded">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
