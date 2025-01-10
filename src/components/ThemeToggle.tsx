import { Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <img 
          src="https://i.postimg.cc/3R7dCnDz/chip.png" 
          alt="easter egg" 
          className="w-10 h-10 text-gray-800 dark:text-gray-200" 
          onError={(e) => e.currentTarget.src = 'https://i.postimg.cc/3R7dCnDz/chip.png'} 
        />
      ) : (
        <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}