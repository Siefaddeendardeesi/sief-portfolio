import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(TestBed.inject(ThemeService)).toBeTruthy();
  });

  it('starts on a valid theme', () => {
    const service = TestBed.inject(ThemeService);
    expect(['light', 'dark']).toContain(service.theme());
  });

  it('toggle() flips between light and dark', () => {
    const service = TestBed.inject(ThemeService);
    const first = service.toggle();
    const second = service.toggle();
    expect(first).not.toBe(second);
  });

  it('setTheme() updates the theme and isDark signals', () => {
    const service = TestBed.inject(ThemeService);

    service.setTheme('dark');
    expect(service.theme()).toBe('dark');
    expect(service.isDark()).toBe(true);

    service.setTheme('light');
    expect(service.theme()).toBe('light');
    expect(service.isDark()).toBe(false);
  });
});
