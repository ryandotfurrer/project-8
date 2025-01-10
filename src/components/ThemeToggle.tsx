import { Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="hover:bg-muted rounded-lg p-2" aria-label="Toggle theme">
      {theme === 'light' ? (
        <Moon className="text-foreground size-5" />
      ) : (
        <img
          src="https://i.postimg.cc/3R7dCnDz/chip.png"
          alt="easter egg"
          className="bg-muted-foreground/40 hover:bg-muted-foreground size-10 rounded-lg"
          onError={(e) => (e.currentTarget.src = 'https://i.postimg.cc/3R7dCnDz/chip.png')}
        />
      )}
    </button>
  );
}
