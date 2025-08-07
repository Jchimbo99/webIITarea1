import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService, Usuario } from '../../service/autenticacion.service';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  registroForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required],
    nombre: ['']
  });

  error: string = '';

  constructor(private fb: FormBuilder, private authServicio: AutenticacionService, private router: Router) {}

registrar() {
  if (this.registroForm.valid) {
    const formValue = this.registroForm.value;
    const nuevoUsuario: Usuario = {
      usuario: formValue.usuario ?? '',
      password: formValue.password ?? '',
      nombre: formValue.nombre ?? ''
    };

    this.authServicio.registrarUsuario(nuevoUsuario).subscribe(exito => {
      if (exito) {
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      } else {
        this.error = 'El usuario ya existe';
      }
    });
  }
}
 camposVacios(): boolean {
    
    return this.registroForm.invalid;
  }
}
