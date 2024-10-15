import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  nombre = 'Tesla Model X';
  automatico = false;
  manual = true;
  imgSrc =
    'https://content.r9cdn.net/rimg/car-images/generic/05_suv-small_white.png?height=232';
  precio = 350;
}
