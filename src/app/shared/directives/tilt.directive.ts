import { Directive, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';

/**
 * Tilts the host element in 3D toward the pointer, producing a subtle
 * parallax / depth effect on hover.
 *
 * Disabled automatically for touch / no-hover devices and for users who
 * prefer reduced motion.
 *
 *   <article appTilt></article>
 *   <article appTilt [tiltMax]="10"></article>
 */
@Directive({
  selector: '[appTilt]',
})
export class TiltDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);

  /** Maximum rotation applied on each axis, in degrees. */
  readonly tiltMax = input(7);
  /** Scale applied while the pointer is over the element. */
  readonly tiltScale = input(1.02);

  private rect: DOMRect | null = null;
  private frame = 0;

  private get enabled(): boolean {
    const view = this.host.nativeElement.ownerDocument.defaultView;
    if (!view) {
      return false;
    }
    return (
      view.matchMedia('(hover: hover)').matches &&
      !view.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }

  @HostListener('pointerenter')
  onEnter(): void {
    if (!this.enabled) {
      return;
    }
    this.rect = this.host.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.host.nativeElement, 'transition', 'transform 120ms ease-out');
  }

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (!this.enabled || !this.rect) {
      return;
    }
    const rect = this.rect;
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      const max = this.tiltMax();
      const transform =
        `perspective(900px) ` +
        `rotateX(${(-py * max).toFixed(2)}deg) ` +
        `rotateY(${(px * max).toFixed(2)}deg) ` +
        `scale(${this.tiltScale()})`;
      this.renderer.setStyle(this.host.nativeElement, 'transform', transform);
    });
  }

  @HostListener('pointerleave')
  onLeave(): void {
    cancelAnimationFrame(this.frame);
    this.rect = null;
    const el = this.host.nativeElement;
    this.renderer.setStyle(el, 'transition', 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)');
    this.renderer.setStyle(el, 'transform', 'perspective(900px) rotateX(0) rotateY(0) scale(1)');
  }
}
