import { DOCUMENT, inject, Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

import { ContactMessage } from '../models';

interface ConfirmOptions {
  confirmText?: string;
  cancelText?: string;
  icon?: SweetAlertIcon;
}

interface InputOptions {
  title: string;
  text?: string;
  inputLabel?: string;
  inputPlaceholder?: string;
  confirmButtonText?: string;
  type?: 'email' | 'text';
}

/**
 * Single point of contact for SweetAlert2. Components depend on this service
 * rather than importing Swal directly, which keeps alert styling and
 * behaviour consistent across the app.
 */
@Injectable({ providedIn: 'root' })
export class AlertService {
  private readonly document = inject(DOCUMENT);
  private readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /** Success modal with a single dismiss button. */
  success(title: string, text?: string): Promise<SweetAlertResult> {
    return Swal.fire({ icon: 'success', title, text, confirmButtonText: 'Great' });
  }

  /** Error modal with a single dismiss button. */
  error(title: string, text?: string): Promise<SweetAlertResult> {
    return Swal.fire({ icon: 'error', title, text, confirmButtonText: 'Got it' });
  }

  /** Confirmation dialog; resolves true when the user confirms. */
  async confirm(title: string, text?: string, options?: ConfirmOptions): Promise<boolean> {
    const result = await Swal.fire({
      icon: options?.icon ?? 'question',
      title,
      text,
      showCancelButton: true,
      confirmButtonText: options?.confirmText ?? 'Yes',
      cancelButtonText: options?.cancelText ?? 'Cancel',
      reverseButtons: true,
      focusCancel: true,
    });
    return result.isConfirmed;
  }

  /** Non-blocking toast pinned to the top-right corner. */
  toast(message: string, icon: SweetAlertIcon = 'success', timer = 3000): void {
    void Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title: message,
      timer,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  /** Single-field input modal; resolves the trimmed value or null if cancelled. */
  async input(options: InputOptions): Promise<string | null> {
    const type = options.type ?? 'text';
    const result = await Swal.fire({
      title: options.title,
      text: options.text,
      input: type,
      inputLabel: options.inputLabel,
      inputPlaceholder: options.inputPlaceholder,
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText ?? 'Send',
      inputValidator: (value: string) => {
        if (!value || !value.trim()) {
          return 'This field cannot be empty.';
        }
        if (type === 'email' && !this.emailPattern.test(value)) {
          return 'Please enter a valid email address.';
        }
        return undefined;
      },
    });
    return result.isConfirmed ? String(result.value).trim() : null;
  }

  /** Multi-field contact form modal; resolves the message or null if cancelled. */
  async contactForm(): Promise<ContactMessage | null> {
    const result = await Swal.fire({
      title: 'Send me a message',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Send message',
      cancelButtonText: 'Cancel',
      html: `
        <input id="swal-name" class="swal2-input" placeholder="Your name" autocomplete="name" />
        <input id="swal-email" type="email" class="swal2-input" placeholder="Your email"
          autocomplete="email" />
        <input id="swal-subject" class="swal2-input" placeholder="Subject" />
        <textarea id="swal-message" class="swal2-textarea" placeholder="Your message"></textarea>
      `,
      preConfirm: () => {
        const read = (id: string): string =>
          (
            this.document.getElementById(id) as
              | HTMLInputElement
              | HTMLTextAreaElement
              | null
          )?.value.trim() ?? '';

        const message: ContactMessage = {
          name: read('swal-name'),
          email: read('swal-email'),
          subject: read('swal-subject'),
          message: read('swal-message'),
        };

        if (!message.name || !message.email || !message.subject || !message.message) {
          Swal.showValidationMessage('Please fill in every field.');
          return false;
        }
        if (!this.emailPattern.test(message.email)) {
          Swal.showValidationMessage('Please enter a valid email address.');
          return false;
        }
        return message;
      },
    });

    return result.isConfirmed ? (result.value as ContactMessage) : null;
  }
}
