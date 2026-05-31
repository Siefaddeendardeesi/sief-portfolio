import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { FORMSPREE } from '../config/site-config';
import { ContactMessage } from '../models';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  isConfigured(): boolean {
    return FORMSPREE.endpoint.trim().length > 0;
  }

  async send(message: ContactMessage): Promise<void> {
    const endpoint = FORMSPREE.endpoint.trim();
    if (!endpoint) {
      throw new Error(
        'Formspree endpoint is missing. Add your form URL in site-config.ts (FORMSPREE.endpoint).',
      );
    }

    try {
      await firstValueFrom(
        this.http.post(endpoint, message, {
          headers: { Accept: 'application/json' },
        }),
      );
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        const detail =
          typeof error.error === 'object' && error.error && 'error' in error.error
            ? String(error.error.error)
            : 'Please try again or email me directly.';
        throw new Error(detail);
      }

      throw error;
    }
  }
}
