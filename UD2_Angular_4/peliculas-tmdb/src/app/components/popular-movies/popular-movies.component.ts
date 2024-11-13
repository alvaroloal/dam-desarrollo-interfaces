import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../../services/tmdb.service';
import { Movie } from '../../interfaces/popular-movies-response.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private tmdbService: TmdbService, private router: Router) { }

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe((data) => {
      console.log('Datos recibidos:', data);

      this.movies = data.results;
    });
  }

  irAMovieDetails(movieId: number): void {
    this.router.navigate(['/movie-details', movieId]);
  }

}
