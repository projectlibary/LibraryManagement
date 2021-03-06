import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { OrderBook } from '../model/order-book';
@Injectable({
  providedIn: 'root',
})
export class OrderBookService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getRentalBook(): Observable<OrderBook[]> {
    return this.http.get<OrderBook[]>(
      'http://localhost/API/api/orderbook/get.php'
    );
  }
  create(data: any): Observable<OrderBook[]> {
    return this.http.post<OrderBook[]>(
      'http://localhost/API/api/orderbook/post.php',
      JSON.stringify(data),
      this.httpOptions
    );
  }
  countdata(): Observable<any> {
    return this.http.get<any>(
      'http://localhost/API/api/orderbook/countBook.php'
    );
  }
  updateRentalBook(id: string): Observable<OrderBook[]> {
    return this.http.get<OrderBook[]>(
      'http://localhost/API/api/orderbook/givebookback.php?id=' + id
      // JSON.stringify(data),
      // this.httpOptions
    );
  }
  chechbookanduser(id1: any, id2: any): Observable<OrderBook[]> {
    return this.http.get<OrderBook[]>(
      'http://localhost/API/api/orderbook/getUserAndBook.php?IdUser=' +
        id1 +
        '&IdBook=' +
        id2
    );
  }
  getAllBookrental(id: any): Observable<OrderBook[]> {
    return this.http.get<OrderBook[]>(
      'http://localhost/API/api/orderbook/bookborrowed.php?id=' + id
    );
  }
}
