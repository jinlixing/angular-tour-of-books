import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Observable, of, Subject} from 'rxjs';
import {BookService} from '../book.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  searchBooks$: Observable<Book[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.searchBooks$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.bookService.searchBooks(term))
    );
  }

  search(term: string) {
    this.searchTerms.next(term);
  }

}
