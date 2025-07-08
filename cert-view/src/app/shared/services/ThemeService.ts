import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeElementId = 'theme-css';

  setTheme(theme: 'aura' | 'aura-dark'): void {
    const themeLink = document.getElementById(this.themeElementId) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `assets/themes/${theme}/theme.css`;
      document.body.setAttribute('data-p-theme', theme);
      document.body.setAttribute('data-p-color-scheme', theme.includes('dark') ? 'dark' : 'light');
    }
  }

  toggleTheme(): void {
    const current = document.body.getAttribute('data-p-theme') ?? 'aura';
    const next = current === 'aura' ? 'aura-dark' : 'aura';
    this.setTheme(next as 'aura' | 'aura-dark');
  }
}
