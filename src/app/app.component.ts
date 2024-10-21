import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { trigger, transition, style, query, group, animate } from '@angular/animations';

const animacionSlide = trigger('routeAnimations', [
  transition('acerca-de <=> contacto', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
  style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%'
  })
  ]),
  query(':enter', [
  style({ left: '-100%' })
  ]),
  query(':leave', animate('600ms ease', style({ left: '100%' }))),
  query(':enter', animate('600ms ease', style({ left: '0%' })))
  ])
  ]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [animacionSlide]
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'semana5';

  inicio() {
    return this.router.url == "/"
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
  