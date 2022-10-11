import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideTD = trigger('triggerSlideTD', [
  state('open', style({ transform: 'translateX(0%)' })),
  state('close', style({ transform: 'translateX(-200%)' })),
  transition('open <=> close', [
    animate('500ms ease-in')
  ])
])