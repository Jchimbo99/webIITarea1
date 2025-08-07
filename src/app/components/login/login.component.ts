import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AutenticacionService } from '../../service/autenticacion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private authServicio: AutenticacionService, private router: Router) {}

  login() {
    this.authServicio.login(this.usuario, this.password).subscribe(exito => {
      if (exito) {
        this.router.navigate(['/productos']);
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }
    });
  }
}
