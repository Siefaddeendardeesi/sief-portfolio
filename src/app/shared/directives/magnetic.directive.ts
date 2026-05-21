import { Directive, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';

/**
 * Gives the host element a "magnetic" pull toward the pointer while it is
 * hovered, snapping back to rest when the pointer leaves.
 *
 * Disabled automatically for touch / no-hover devices and for users who
 * prefer reduced motion.
 *
 *   <button appMagnetic></button>
 *   <button appMagnetic [magneticStrength]="0.5">Strong pull</button>
 */
@Directive({
  selector: '[appMagnetic]',
})
export class MagneticDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);

  /** Fraction of the pointer offset the element follows (0–1). */
  readonly magneticStrength = input(0.35);
  /** Maximum travel distance from rest, in pixels. */
  readonly magneticMax = input(14);

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
  }

  @HostListener('pointermove', ['$event'])
  onMove(event: PointerEvent): void {
    if (!this.enabled || !this.rect) {
      return;
    }
    const rect = this.rect;
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const strength = this.magneticStrength();
      const max = this.magneticMax();
      const clamp = (n: number) => Math.max(-max, Math.min(max, n));
      const x = clamp((event.clientX - (rect.left + rect.width / 2)) * strength);
      const y = clamp((event.clientY - (rect.top + rect.height / 2)) * strength);
      this.renderer.setStyle(
        this.host.nativeElement,
        'transform',
        `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`,
      );
    });
  }

  @HostListener('pointerleave')
  onLeave(): void {
    cancelAnimationFrame(this.frame);
    this.rect = null;
    this.renderer.removeStyle(this.host.nativeElement, 'transform');
  }
}
