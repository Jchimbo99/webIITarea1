import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { Error404Component } from './components/error404/error404.component';


export const routes: Routes = [

    {path:'home', component:HomeComponent},
    {path:'nosotros',component:NosotrosComponent},
    {path:'productos',component:ProductosComponent},


    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path:'**',component:Error404Component}

    

    
];
