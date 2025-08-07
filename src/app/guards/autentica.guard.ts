import { CanActivateFn, Router } from '@angular/router';
import { routes } from '../app.routes';
import { inject } from '@angular/core';
import { AutenticacionService } from '../service/autenticacion.service';

export const autenticaGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);

  const authServicio=inject(AutenticacionService)


  const loginExitoso = localStorage.getItem('user');

  
  if (authServicio.sessionIniciada() ) {
    return true;
  } else {
    localStorage.setItem('redirectUrl', state.url);

    return router.parseUrl('/login');
  }

};
