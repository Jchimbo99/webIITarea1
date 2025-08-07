import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Error404Component } from './components/error404/error404.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { LoginComponent } from './components/login/login.component';

import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { loginMatchGuard } from './guards/login-match.guard';
import { ProductosGuard } from './guards/productos.guard';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent, canActivate: [ProductosGuard] },
    { path: 'registro', component: RegistroUsuarioComponent, canDeactivate: [registroUsuarioGuard] },
    { path: 'login', component: LoginComponent, canMatch: [loginMatchGuard] },

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: Error404Component }
    
];
