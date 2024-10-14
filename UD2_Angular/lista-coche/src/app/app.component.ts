import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars = [
    { model: 'Ford Mustang', year: 2021, price: 55000, image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Ford_Mustang_GT_%282018%29.jpg' },
    { model: 'Tesla Model S', year: 2022, price: 79999, image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Tesla_Model_S_-_White.jpg' }
  ];
}
