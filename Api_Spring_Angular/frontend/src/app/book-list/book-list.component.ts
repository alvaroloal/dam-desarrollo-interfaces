import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../service/book-service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  books?: Book[];

  constructor(private bookService: BookService){}

  ngOnInit(): void {
     this.fetchBooks();
  }


  private fetchBooks() {
    this.bookService.findAll().subscribe({
      
      next: value => {
          this.books= value
          console.log(value)
      },
      error: error => {console.log(error)}
    })
  }

}
