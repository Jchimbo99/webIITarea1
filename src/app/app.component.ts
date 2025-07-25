import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PresentacionComponent } from "./components/presentacion/presentacion.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Presentacion2Component } from "./components/presentacion2/presentacion2.component";



@Component({
  selector: 'app-root',
  standalone: true,

  imports: [NavBarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad';
}
