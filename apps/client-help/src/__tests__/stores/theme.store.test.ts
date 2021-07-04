import {
  DARK_THEME,
  DEFAULT_THEME,
  KEY_THEME,
  themeAtom,
  toggleTheme,
} from '../../stores/theme.store';
import { renderHook, act } from '@testing-library/react-hooks';
import { useAtom } from 'jotai';
import { useUpdateAtom } from 'jotai/utils';


const useThemeAtomStore = () => useAtom(themeAtom);

describe('Theme store', () => {
  test('should have the default theme', () => {
    const { result } = renderHook(useThemeAtomStore);
    expect(result.current[0]).toBe(DEFAULT_THEME);
  });

  test('should change the theme', () => {
    const themeValue = renderHook(useThemeAtomStore);
    const toggleThemeDispatch = renderHook(() => useUpdateAtom(toggleTheme));

    expect(themeValue.result.current[0].toString()).toBe(DEFAULT_THEME);

    act(() => {
      toggleThemeDispatch.result.current();
    });

    expect(themeValue.result.current[0].toString()).toBe(DARK_THEME);

    act(() => {
      toggleThemeDispatch.result.current();
    });
    expect(themeValue.result.current[0].toString()).toBe(DEFAULT_THEME);
  });

  test('should apply the first initial dark theme', () => {
    localStorage.setItem(KEY_THEME, DARK_THEME);
    const { result } = renderHook(useThemeAtomStore);
    expect(result.current[0].toString()).toBe(DARK_THEME);
  });
});
