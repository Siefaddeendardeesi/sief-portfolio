import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { SOCIAL_LINKS } from '@core/config/site-config';
import { SocialPlatform } from '@core/models';
import { AlertService } from '@core/services/alert.service';
import { ContactService } from '@core/services/contact.service';
import { ScrollRevealDirective } from '@shared/directives/scroll-reveal.directive';
import { IconComponent, IconName } from '@shared/components/icon/icon.component';

const SOCIAL_ICONS: Record<SocialPlatform, IconName> = {
  github: 'github',
  linkedin: 'linkedin',
  email: 'mail',
  phone: 'phone',
  location: 'map-pin',
};

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ScrollRevealDirective, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly alert = inject(AlertService);
  private readonly contactService = inject(ContactService);

  protected readonly socialLinks = SOCIAL_LINKS;
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  iconFor(platform: SocialPlatform): IconName {
    return SOCIAL_ICONS[platform];
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      await this.alert.error(
        'Please fix the form',
        'Some fields are missing or invalid. Check the highlighted fields and try again.',
      );
      return;
    }

    this.submitting.set(true);

    try {
      await this.contactService.send(this.form.getRawValue());
      this.alert.toast('Message sent — thanks for reaching out!', 'success', 3000);
      this.form.reset();
    } catch (error) {
      const detail =
        error instanceof Error ? error.message : 'Please try again or email me directly.';
      await this.alert.error('Could not send message', detail);
    } finally {
      this.submitting.set(false);
    }
  }
}
