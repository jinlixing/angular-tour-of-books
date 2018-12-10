import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book = {
    id: null,
    name: null,
    price: null,
    thumb: null
  };

  constructor(
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  save(): void {
    if (!this.book.name || !this.book.name.trim()) {
      alert('book name empty');
      return;
    }

    return this.bookService.addBook(this.book).subscribe(() => this.location.back());
  }

}
