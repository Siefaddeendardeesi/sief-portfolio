import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  DOCUMENT,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { NAV_LINKS, SITE } from '@core/config/site-config';
import { AlertService } from '@core/services/alert.service';
import { ThemeService } from '@core/services/theme.service';
import { expandCollapse } from '@shared/animations/animations';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandCollapse],
})
export class NavbarComponent {
  readonly site = SITE;
  protected readonly navLinks = NAV_LINKS;
  protected readonly theme = inject(ThemeService);
  private readonly alert = inject(AlertService);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  readonly mobileOpen = signal(false);
  readonly scrolled = signal(false);
  /** Fragment of the section currently in view — drives the active nav link. */
  readonly activeFragment = signal('');
  /** Page reading progress, 0–100. */
  readonly scrollProgress = signal(0);

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const view = this.document.defaultView;
    if (!view) {
      return;
    }
    const y = view.scrollY;
    this.scrolled.set(y > 24);

    const doc = this.document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    this.scrollProgress.set(scrollable > 0 ? Math.min(100, (y / scrollable) * 100) : 0);
  }

  toggleTheme(): void {
    const next = this.theme.toggle();
    this.alert.toast(`Switched to ${next} mode`, 'info', 1500);
  }

  onCvDownload(): void {
    this.alert.toast('CV downloaded — good luck reaching out!', 'success', 3000);
  }

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  /**
   * Watches each navigable section and marks the one crossing the middle of
   * the viewport as active. Degrades silently without IntersectionObserver.
   */
  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeFragment.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    for (const link of this.navLinks) {
      const section = this.document.getElementById(link.fragment);
      if (section) {
        observer.observe(section);
      }
    }

    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
