import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private booksUrl = 'api/books';

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap(_ => this.log('fetched books success')),
      catchError(this.handleError('get books', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('BookService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} error: ${error.message}`);

      return of(result as T);
    };
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${id}`).pipe(
      tap(book => this.log(`fetch book: id = ${book.id}`)),
      catchError(this.handleError(`getBook id=${id}`, {id: 0} as Book))
    );
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(this.booksUrl, book).pipe(
      tap(_ => this.log(`updateBook: id = ${book.id}`)),
      catchError(this.handleError<any>(`updateBook id=${book.id}`))
    );
  }

  addBook(book: Book): Observable<any> {
    return this.http.post<any>(this.booksUrl, book, httpOptions).pipe(
      tap(book => this.log(`addBook: id=${book.id}`)),
      catchError(this.handleError<any>(`addBook: id=${book.id}`))
    );
  }

  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`, httpOptions).pipe(
      tap(books => this.log(`found books match ${term}`)),
      catchError(this.handleError<Book[]>(`searchBooks: match ${term}`, []))
    );
  }
}
