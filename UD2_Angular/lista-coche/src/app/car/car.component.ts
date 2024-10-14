import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() carModel: string = '';
  @Input() carYear: number = 0;
  @Input() carPrice: number = 0;
  @Input() carImage: string = '';
}
