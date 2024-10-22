import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.starWarsService.getPeople().subscribe((data) => {
      this.people = data.results;
    });
  }
}
