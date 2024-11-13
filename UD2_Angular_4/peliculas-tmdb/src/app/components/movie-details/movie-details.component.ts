import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../services/tmdb.service';
import { MovieDetailsResponse } from '../../interfaces/movie-details-response.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: MovieDetailsResponse | null = null;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('movieId');
    if (movieId) {
      this.tmdbService.getMovieDetails(+movieId).subscribe((data) => {
        this.movieDetails = data;
        console.log('Detalles de la película:', data);
      });
    }
  }
}
