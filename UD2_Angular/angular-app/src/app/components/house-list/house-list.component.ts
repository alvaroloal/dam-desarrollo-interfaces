import { Component, OnInit } from '@angular/core';
import { House } from '../../interfaces/house.interfaces';
import { HouseServiceService } from '../../services/house.service.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrl: './house-list.component.css'
})
export class HouseListComponent implements OnInit {

  listadoCasas: House[] = [];

  constructor(private houseService: HouseServiceService) {



  }

  ngOnInit(): void {
    this.houseService.getHouseList().subscribe(respuesta => {
      //codigo que se ejeuta cuando llega la respuesta del servidor
      this.listadoCasas=respuesta;
    });//el suscribe avisa de la respuesta de la llamada

  }

}
