import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progressBarValue: number = 50;  
  progressBarColor: string = 'bg-primary'; 

 
  onColorChange(newColor: string) {
    this.progressBarColor = newColor;
  }

  
  onValueChange(newValue: number) {
    this.progressBarValue = newValue;
  }
}

