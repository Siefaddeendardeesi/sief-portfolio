import { afterNextRender, DestroyRef, Directive, ElementRef, inject, input } from '@angular/core';

/**
 * Counts the host element's text content up from zero to a target value the
 * first time it scrolls into view.
 *
 * Honours `prefers-reduced-motion` and degrades gracefully when
 * IntersectionObserver is unavailable (the final value is shown immediately).
 *
 *   <span [appCountUp]="30">0</span>
 */
@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** The value to count up to. */
  readonly appCountUp = input.required<number>();
  /** Duration of the count, in milliseconds. */
  readonly countUpDuration = input(1700);

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const el = this.host.nativeElement;
    const target = this.appCountUp();
    const view = el.ownerDocument.defaultView;
    const reducedMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      el.textContent = String(target);
      return;
    }

    el.textContent = '0';

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          this.animate(el, target);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }

  private animate(el: HTMLElement, target: number): void {
    const duration = this.countUpDuration();
    const start = performance.now();
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const step = (now: number): void => {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = String(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = String(target);
      }
    };

    requestAnimationFrame(step);
  }
}
