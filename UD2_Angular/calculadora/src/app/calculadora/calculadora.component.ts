import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  displayValue: string = '';
  operando1: number | null = null;
  operador: string | null = null;

  aniadirNumero(num: string) {
    this.displayValue += num;
  }

  setOperador(op: string) {
    if (this.displayValue) {
      this.operando1 = parseFloat(this.displayValue);
      this.operador = op;
      this.displayValue += ' ' + op + ' ';
    }
  }

  calcular() {
    if (this.operando1 !== null && this.operador && this.displayValue) {
      const parts = this.displayValue.split(' ');
      const operando2 = parseFloat(parts[2]);
      let result: number;

      if (this.operador === '+') {
        result = this.operando1 + operando2;
      } else if (this.operador === '-') {
        result = this.operando1 - operando2;
      } else {
        return;
      }

      this.displayValue = result.toString();
      this.operando1 = null;
      this.operador = null;
    }
  }

  clear() {
    this.displayValue = '';
    this.operando1 = null;
    this.operador = null;
  }
}
