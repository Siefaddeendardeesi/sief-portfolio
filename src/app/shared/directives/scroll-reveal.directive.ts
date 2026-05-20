import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';

/**
 * Reveals the host element with a fade + slide-up the first time it scrolls
 * into view. Honours `prefers-reduced-motion` and degrades gracefully when
 * IntersectionObserver is unavailable.
 *
 *   <div appScrollReveal></div>
 *   <div appScrollReveal [revealDelay]="120"></div>
 */
@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);

  /** Delay before the reveal starts, in milliseconds (useful for staggering). */
  readonly revealDelay = input(0);
  /** Vertical travel distance of the slide-up, in pixels. */
  readonly revealDistance = input(28);

  constructor() {
    afterNextRender(() => this.setup());
  }

  private setup(): void {
    const el = this.host.nativeElement;
    const view = el.ownerDocument.defaultView;
    const reducedMotion = view?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? false;

    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      this.renderer.setStyle(el, 'opacity', '1');
      return;
    }

    const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';
    this.renderer.setStyle(el, 'opacity', '0');
    this.renderer.setStyle(el, 'transform', `translateY(${this.revealDistance()}px)`);
    this.renderer.setStyle(
      el,
      'transition',
      `opacity 700ms ${easing} ${this.revealDelay()}ms, ` +
        `transform 700ms ${easing} ${this.revealDelay()}ms`,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          this.renderer.setStyle(el, 'opacity', '1');
          this.renderer.setStyle(el, 'transform', 'translateY(0)');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
