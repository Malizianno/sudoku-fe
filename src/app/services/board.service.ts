import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoardService {
  constructor(private http: HttpClient) {}

  // send board example
  sendBoard(board: string[][]): Observable<any> {
    return this.http.post('/api/board', { board });
  }

  // get solved board example
  getBoard(): Observable<string[][]> {
    return this.http.get<string[][]>('/api/board');
  }
}
