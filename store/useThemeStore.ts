import create from 'zustand';
import { persist } from 'zustand/middleware';
import { toggleThemeClassNames } from '../utils/theme';

export enum AvailableThemesE {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeStoreI {
  theme: AvailableThemesE;
  onToggleTheme: () => void;
  __hasHydrated: boolean;
  __setHasHydrated: (__hasHydrated: boolean) => void;
}

export const useThemeStore = create(
  persist<ThemeStoreI>(
    (set) => ({
      theme: AvailableThemesE.LIGHT,
      onToggleTheme: () =>
        set((state) => {
          const themeToApply = state.theme === AvailableThemesE.LIGHT ? AvailableThemesE.DARK : AvailableThemesE.LIGHT;

          toggleThemeClassNames(themeToApply);

          return { theme: themeToApply };
        }),
      __hasHydrated: false,
      __setHasHydrated: (__hasHydrated) => ({ __hasHydrated }),
    }),
    {
      name: 'theme',
      onRehydrateStorage: () => (state) => state?.__setHasHydrated(true),
    }
  )
);
