import {
    trigger, animateChild, group,
    transition, animate, style, query, keyframes
} from '@angular/animations';


export const fadeInAnimation =
    trigger('routeAnimation', [
        transition('addplant => *', [
            query(':enter', style({ position: 'fixed', width: '57%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('.3s', style({ opacity: 1 }))
                ], { optional: true })
            ])
        ]),
        transition('home => *', [
            query(':enter', style({ position: 'fixed', width: '57%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('.3s', style({ opacity: 1 }))
                ], { optional: true })
            ])
        ]),
        transition('plantlist => addplant', [
            query(':enter', style({ position: 'fixed', width: '57%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('.3s', style({ opacity: 1 }))
                ], { optional: true })
            ])
        ]),
        transition('plantlist => home', [
            query(':enter', style({ position: 'fixed', width: '57%' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('.3s', style({ opacity: 1 }))
                ], { optional: true })
            ])
        ]),
    ]);
