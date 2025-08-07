import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, switchMap } from 'rxjs';

export interface Usuario {
  usuario: string;
  password: string;
  nombre?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuariosUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

 
  login(usuario: string, password: string): Observable<boolean> {
    return this.http.get<Usuario[]>(this.usuariosUrl).pipe(
      map(usuarios => {
        const valido = usuarios.some(u => u.usuario === usuario && u.password === password);
        if (valido) {
          localStorage.setItem('usuarioActual', usuario);
        }
        return valido;
      })
    );
  }


  sessionIniciada(): boolean {
    return localStorage.getItem('usuarioActual') !== null;
  }


  logout(): void {
    localStorage.removeItem('usuarioActual');
  }

  
  registrarUsuario(nuevoUsuario: Usuario): Observable<boolean> {
    return this.http.get<Usuario[]>(this.usuariosUrl).pipe(
      switchMap(usuarios => {
        const existe = usuarios.some(u => u.usuario === nuevoUsuario.usuario);
        if (existe) {
        
          return of(false);
        } else {
          
          return this.http.post<Usuario>(this.usuariosUrl, nuevoUsuario).pipe(
            map(() => true)
          );
        }
      })
    );
  }
}
