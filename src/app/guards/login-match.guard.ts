import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion.service';

export const loginMatchGuard: CanMatchFn = (route, segments) => {
  const authServicio=inject(AutenticacionService);
  return !authServicio.sessionIniciada();
};
