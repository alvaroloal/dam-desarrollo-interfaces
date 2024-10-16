import { Component } from '@angular/core';
import { Student } from '../../model/estudiante';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {
  displayedColumns: string[] = ['numAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'cursoMatriculado'];
  dataSource: Student[] = [
    { numAlumno: 1, nombre: 'Carlos', apellidos: 'García Pérez', nif: '12345678A', edad: 20, cursoMatriculado: '3º ESO' },
    { numAlumno: 2, nombre: 'Pepe', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '4º ESO' },
    { numAlumno: 3, nombre: 'Antonio', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '4º ESO' },
    { numAlumno: 4, nombre: 'José', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '4º ESO' },
    { numAlumno: 5, nombre: 'Manuel', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '4º ESO' },
    { numAlumno: 6, nombre: 'Ana', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '4º ESO' },
    { numAlumno: 7, nombre: 'Álvaro', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '4º ESO' }
  ];
}

