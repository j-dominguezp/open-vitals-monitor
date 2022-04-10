import { AvailableThemesE } from '../store/useThemeStore';

export const toggleThemeClassNames = (themeToApply: AvailableThemesE) => {
  if (themeToApply === AvailableThemesE.LIGHT) {
    document.documentElement.classList.remove(AvailableThemesE.DARK);
    document.documentElement.classList.add(AvailableThemesE.LIGHT);
  } else {
    document.documentElement.classList.remove(AvailableThemesE.LIGHT);
    document.documentElement.classList.add(AvailableThemesE.DARK);
  }
};
