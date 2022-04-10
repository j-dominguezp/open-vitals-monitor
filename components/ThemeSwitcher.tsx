import * as Switch from '@radix-ui/react-switch';
import { useCallback } from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import { AvailableThemesE } from '../store/useThemeStore';
import { useThemeStore } from '../store/useThemeStore';

const ThemeSwitch = () => {
  const __hasHydrated = useThemeStore(useCallback((s) => s.__hasHydrated, []));
  const theme = useThemeStore(useCallback((s) => s.theme, []));
  const onToggleTheme = useThemeStore(useCallback((s) => s.onToggleTheme, []));

  return (
    <Switch.Root
      className="w-14 h-5 bg-amber-500 dark:bg-purple-500 inline-flex items-center justify-start dark:justify-end rounded-full"
      checked={theme === AvailableThemesE.DARK}
      onCheckedChange={() => onToggleTheme()}
    >
      <Switch.Thumb className="flex items-center justify-center transform bg-white rounded-full h-7 w-7 text-amber-500 dark:text-purple-400 ring ring-amber-500/30 hover:active:ring-amber-500/60 dark:ring-purple-400/70 transition-shadow duration-300">
        {__hasHydrated && (theme === AvailableThemesE.LIGHT ? <FaRegSun /> : <FaRegMoon />)}
      </Switch.Thumb>
    </Switch.Root>
  );
};

export default ThemeSwitch;
