import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { FooterComponent } from '@features/footer/footer.component';
import { NavbarComponent } from '@features/navbar/navbar.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { MagneticDirective } from '@shared/directives/magnetic.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, IconComponent, MagneticDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly viewport = inject(ViewportScroller);

  readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop.set(window.scrollY > 480);
  }

  scrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
