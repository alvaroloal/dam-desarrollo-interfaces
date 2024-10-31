import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.dto';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  usuario: Usuario = new Usuario();
  letraNIF: string = '';
  mensajeError: string | null = null;

  calcularLetraNIF() {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    if (this.usuario.nif.length === 8 && !isNaN(+this.usuario.nif)) {
      const numero = parseInt(this.usuario.nif, 10);
      this.letraNIF = letras[numero % 23];
    } else {
      this.letraNIF = '';
    }
  }

  registrarse() {
    this.mensajeError = null;

    if (!this.usuario.nombre || !this.usuario.apellidos || !this.usuario.nif || !this.usuario.email || 
        !this.usuario.telefono || !this.usuario.sexo || !this.usuario.origen || !this.usuario.password || 
        !this.usuario.confirmarPassword || !this.usuario.terminos) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.usuario.password !== this.usuario.confirmarPassword) {
      this.mensajeError = 'Las contraseñas no coinciden.';
      return;
    }

    console.log('Información del usuario:', this.usuario);
    alert('Registro exitoso');
  }
}



