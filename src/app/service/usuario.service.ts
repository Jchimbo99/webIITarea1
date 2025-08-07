import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

export interface Usuario {
  usuario: string;
  password: string;
  nombre?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuariosUrl = 'assets/data/usuarios.json';
  private usuarios: Usuario[] = [];

  constructor(private http: HttpClient) { }


  cargarUsuarios(): Observable<Usuario[]> {
    if (this.usuarios.length > 0) {
      return of(this.usuarios);
    }
    return this.http.get<Usuario[]>(this.usuariosUrl).pipe(
      tap(data => this.usuarios = data)
    );
  }


  login(usuario: string, password: string): Observable<boolean> {
    return this.cargarUsuarios().pipe(
      map(users => users.some(u => u.usuario === usuario && u.password === password))
    );
  }


  registrarUsuario(nuevoUsuario: Usuario): Observable<boolean> {
    return this.cargarUsuarios().pipe(
      map(users => {
        const existe = users.some(u => u.usuario === nuevoUsuario.usuario);
        if (existe) return false;
        this.usuarios.push(nuevoUsuario);

        return true;
      })
    );
  }
}
