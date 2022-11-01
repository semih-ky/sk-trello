import { renderHook, act } from '@testing-library/react';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  test('no initialValue', () => {
    const { result } = renderHook(() => useToggle());
  
    act(() => {
      const value = result.current[0];
      const toggle = result.current[1];
      toggle();
    })
  
    expect(result.current[0]).toBe(true);
  });

  test('initialValue false', () => {
    const { result } = renderHook(() => useToggle(false));
  
    act(() => {
      const value = result.current[0];
      const toggle = result.current[1];
      toggle();
    })
  
    expect(result.current[0]).toBe(true);
  });

  test('initialValue true', () => {
    const { result } = renderHook(() => useToggle(true));
  
    act(() => {
      const value = result.current[0];
      const toggle = result.current[1];
      toggle();
    })
  
    expect(result.current[0]).toBe(false);
  });
})
