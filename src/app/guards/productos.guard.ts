import { Injectable } from '@angular/core';
import { CanActivateFn, CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosGuard implements CanActivate {
  constructor(private authService: AutenticacionService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.sessionIniciada()) {
      return true;
    } else {
      alert('Por favor inicia sesión o regístrate para ver los productos.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
