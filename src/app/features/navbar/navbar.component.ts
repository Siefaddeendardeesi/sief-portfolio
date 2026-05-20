import {
  ChangeDetectionStrategy,
  Component,
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

  readonly mobileOpen = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
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
}
