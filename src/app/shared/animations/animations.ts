import {
  animate,
  AnimationTriggerMetadata,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** Fade the host in on enter. */
export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate(`420ms ${EASE}`, style({ opacity: 1 }))]),
]);

/** Fade + slide the host up on enter. */
export const fadeInUp: AnimationTriggerMetadata = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(22px)' }),
    animate(`540ms ${EASE}`, style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

/** Staggered fade-up of every entering child within the host. */
export const listStagger: AnimationTriggerMetadata = trigger('listStagger', [
  transition(':enter', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(18px)' }),
        stagger(85, [
          animate(`480ms ${EASE}`, style({ opacity: 1, transform: 'translateY(0)' })),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);

/** Expand / collapse used by the mobile navigation menu. */
export const expandCollapse: AnimationTriggerMetadata = trigger('expandCollapse', [
  transition(':enter', [
    style({ height: 0, opacity: 0, overflow: 'hidden' }),
    animate(`280ms ${EASE}`, style({ height: '*', opacity: 1 })),
  ]),
  transition(':leave', [
    style({ overflow: 'hidden' }),
    animate('220ms ease-in', style({ height: 0, opacity: 0 })),
  ]),
]);
