import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly apiUrl = 'http://localhost:3000/message';
  constructor(private _http: HttpClient) { }
  
  getAll(): Observable<Message[]>
  {
    return this._http.get<Message[]>(`${this.apiUrl}`);
  }
  
  get(id: string): Observable<Message>
  {
    return this._http.get<Message>(`${this.apiUrl}/${id}`);
  }

  update(id: string, message: Message): Observable<Message>
  {
    return this._http.put<Message>(`${this.apiUrl}/${id}`, message);
  }

  delete(id: string): Observable<unknown>
  {
    return this._http.delete<unknown>(`${this.apiUrl}/${id}`);
  }
}
