import { Component } from '@angular/core';
import { Student } from '../../model/estudiante';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent {
  allColumns: { name: string, label: string }[] = [
    { name: 'numAlumno', label: 'Nº de Alumno' },
    { name: 'nombre', label: 'Nombre' },
    { name: 'apellidos', label: 'Apellidos' },
    { name: 'nif', label: 'NIF' },
    { name: 'edad', label: 'Edad' },
    { name: 'cursoMatriculado', label: 'Curso Matriculado' }
  ];

  columnVisibility: { [key: string]: boolean } = {
    numAlumno: true,
    nombre: true,
    apellidos: true,
    nif: true,
    edad: true,
    cursoMatriculado: true
  };

  dataSource: Student[] = [
    { numAlumno: 1, nombre: 'Carlos', apellidos: 'García Pérez', nif: '12345678A', edad: 20, cursoMatriculado: '2º DAM' },
    { numAlumno: 2, nombre: 'Pepe', apellidos: 'Ruiz López', nif: '23456789B', edad: 21, cursoMatriculado: '2º DAM' },
    { numAlumno: 3, nombre: 'Antonio', apellidos: 'Ramirez Núñez', nif: '23456789B', edad: 22, cursoMatriculado: '2º DAM' },
    { numAlumno: 4, nombre: 'José', apellidos: 'López Márquez', nif: '23456789B', edad: 22, cursoMatriculado: '2º DAM' },
    { numAlumno: 5, nombre: 'Manuel', apellidos: 'Alcaraz Guitierrez', nif: '23456789B', edad: 21, cursoMatriculado: '1º DAM' },
    { numAlumno: 6, nombre: 'Ana', apellidos: 'Ruiz Alonso', nif: '23456789B', edad: 21, cursoMatriculado: '1º DAM' },
    { numAlumno: 7, nombre: 'Álvaro', apellidos: 'López Márquez', nif: '23456789B', edad: 21, cursoMatriculado: '1º DAM' },
    { numAlumno: 8, nombre: 'Eva', apellidos: 'Ruiz Alonso', nif: '23456789B', edad: 22, cursoMatriculado: '2º DAM' }
  ];

  get displayedColumns(): string[] {
    return this.allColumns
      .filter(col => this.columnVisibility[col.name])
      .map(col => col.name);
  }

  toggleColumn(column: string) {
    this.columnVisibility[column] = !this.columnVisibility[column];
  }
}
