import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { PresentacionComponent } from "../../components/presentacion/presentacion.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Presentacion2Component } from "../../components/presentacion2/presentacion2.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent, PresentacionComponent, FooterComponent, Presentacion2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
