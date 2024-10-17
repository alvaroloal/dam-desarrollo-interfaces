import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-progress-bar',
  templateUrl: './custom-progress-bar.component.html',
  styleUrls: ['./custom-progress-bar.component.css']
})
export class CustomProgressBarComponent {
  @Input() value: number = 0; // valor con el que empieza la barra
  @Input() color: string = 'bg-primary';
}
