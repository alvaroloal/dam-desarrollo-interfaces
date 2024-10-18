import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.starWarsService.getVehicles().subscribe((data: any) => {
      this.vehicles = data.results;
    });
  }
}
