import {trigger, state, style, transition, animate } from '@angular/animations'

export const itemStateTrigger = trigger('itemState', [
    transition(':enter', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('500ms ease-out', style({
            opacity: 1,
            transform: 'translateX(0)'
        }))
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({
            opacity: 0,
            transform: 'translateX(100)'
        }))
    ])
])