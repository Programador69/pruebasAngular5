# Semana5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Instalando Bootstrap

```
npm i bootstrap
```

## Configurandolo en el archivo angualr.json

Tenemos que configurarlo para poder usarlo sin ningun problema en toda la aplicación.
```
"styles": [
"node_modules/bootstrap/dist/css/bootstrap.min.css",
"src/styles.css" -> Esta linea ya viene por defecto
],
"scripts": [
"node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```

## Usando Bootstrap en el HTML

Aqui solamente es poner los estilos que mas nos guste, uno de los que usamos fue:
```
<div class="navbar navbar-expand-lg">
      <div class="col-md-4 d-flex justify-content-center">
        <a class="navbar-item text-white" routerLink="acerca-de">Acerca de</a>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <a class="navbar-item text-white" routerLink="contacto">Contacto</a>
      </div>
      <div class="col-md-4 d-flex justify-content-center">
        <a class="navbar-item text-white" routerLink="galeria">Galeria</a>
      </div>
</div>
```

## Configurando las animaciones al cambiar de ruta

Configuramos el modulo necesario en el app.config.ts
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

providers: [provideZoneChangeDetection(..., BrowserAnimationsModule]

```

## Crear una animacion e importar las funciones necesarias para la misma
Dentro de transition van las rutas en las cuales ira la animacion
```
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
```

## Configurar una funcion en el componente para poder realziar el cambio de ruta
```
 prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
```

## Insertar la animacion en el HTML
 
Para esto, encerramos el router-outlet en un div y le pasamos la funcion haciendo referencia a el outlet de la etiqueta router-outlet
```
<div [@routeAnimations]="prepareRoute(outlet)">
  <router-outlet #outlet="outlet"/>
</div>
```