import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';

import { SITE } from '../config/site-config';

export type Theme = 'light' | 'dark';

/**
 * Owns the light / dark theme. The active theme is mirrored to the
 * `data-theme` attribute on `<html>` and persisted to localStorage so the
 * inline script in index.html can restore it before the next first paint.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  private readonly _theme = signal<Theme>(this.resolveInitialTheme());

  /** The active theme. */
  readonly theme = this._theme.asReadonly();

  /** Convenience signal — true while the dark theme is active. */
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    effect(() => this.applyTheme(this._theme()));
  }

  /** Switch between light and dark; returns the newly active theme. */
  toggle(): Theme {
    const next: Theme = this._theme() === 'dark' ? 'light' : 'dark';
    this._theme.set(next);
    return next;
  }

  /** Set a specific theme. */
  setTheme(theme: Theme): void {
    this._theme.set(theme);
  }

  private applyTheme(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);

    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0b1120' : '#f6f8fc');

    try {
      this.document.defaultView?.localStorage.setItem(SITE.themeStorageKey, theme);
    } catch {
      // localStorage may be blocked (private mode) — non-fatal.
    }
  }

  private resolveInitialTheme(): Theme {
    // The inline script in index.html already applied a theme to <html>;
    // mirror it so the service and the DOM start in agreement.
    const current = this.document.documentElement.getAttribute('data-theme');
    if (current === 'light' || current === 'dark') {
      return current;
    }

    try {
      const stored = this.document.defaultView?.localStorage.getItem(SITE.themeStorageKey);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // localStorage unavailable — fall through to the default.
    }

    return 'dark';
  }
}
