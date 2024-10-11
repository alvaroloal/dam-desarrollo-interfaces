import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatSlideToggleModule],  // Añadir el módulo aquí si es standalone
  standalone: true  // Marcar el componente como independiente
})
export class AppComponent {
  title = 'Mi Aplicación con Slide Toggle';
}


