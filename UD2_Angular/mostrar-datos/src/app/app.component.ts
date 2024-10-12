import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Álvaro';
  apellidos: string = 'Lorente Almán';
  edad: number = 26;

  calcularAnoNacimiento(): number {
    return 2024 - this.edad;
  }

  mostrarInformacion(): void {
    const anoNacimiento = this.calcularAnoNacimiento();
    alert(`Nombre: ${this.nombre} ${this.apellidos}\nEdad: ${this.edad}\nAño de nacimiento: ${anoNacimiento}`);
  }
}
