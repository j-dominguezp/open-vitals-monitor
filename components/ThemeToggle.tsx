import { Toggle } from '@radix-ui/react-toggle';
import { useCallback } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { AvailableThemesE } from '../store/useThemeStore';
import { useThemeStore } from '../store/useThemeStore';

const ThemeToggle = () => {
  const theme = useThemeStore(useCallback((s) => s.theme, []));
  const onToggleTheme = useThemeStore(useCallback((s) => s.onToggleTheme, []));

  return (
    <Toggle
      aria-label="Switch theme"
      className="appearance-none transition-colors duration-300 hover:bg-orange-400/10 text-orange-500 hover:text-orange-400 dark:hover:bg-violet-400/30 dark:text-violet-400 dark:hover:text-violet-300 text-xl p-3 rounded-full focus:ring focus:ring-amber-500/40 dark:focus:ring-violet-300/40"
      pressed={theme === AvailableThemesE.DARK}
      onPressedChange={() => onToggleTheme()}
    >
      {theme === AvailableThemesE.LIGHT ? <FiSun /> : <FiMoon />}
    </Toggle>
  );
};

export default ThemeToggle;
