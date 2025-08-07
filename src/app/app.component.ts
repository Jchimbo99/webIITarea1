import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']   // <--- corregido
})
export class AppComponent {
  title = 'actividad';
}
