import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = 'http://localhost:3000/user';

  id: string = 'user1'; //CHANGE IT
  
  constructor(private _http: HttpClient) { }

  get(): Observable<User>
  {
    return this._http.get<User>(`${this.apiUrl}/${this.id}`);
  }

  update(id: string, user: User): Observable<User>
  {
    return this._http.put<User>(`${this.apiUrl}/${id}`, user);
  }

  delete(id: string): Observable<unknown>
  {
    return this._http.delete<unknown>(`${this.apiUrl}/${id}`);
  }

}
