import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AlertService } from '@core/services/alert.service';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, IconComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  private readonly alert = inject(AlertService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    void this.promptHome();
  }

  private async promptHome(): Promise<void> {
    const goHome = await this.alert.confirm('Lost?', 'Go back home?', {
      confirmText: 'Take me home',
      cancelText: 'Stay here',
      icon: 'warning',
    });

    if (goHome) {
      await this.router.navigate(['/']);
    }
  }
}
