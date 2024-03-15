import { Injectable } from '@angular/core';
import { ChatRoom } from '../model/chat-room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {
  chatRooms!: ChatRoom[];
  private readonly apiUrl = 'http://localhost:3000/room';
  constructor(private _http: HttpClient) { }
  
  getAllChatRooms(): Observable<ChatRoom[]>
  {
    return this._http.get<ChatRoom[]>(`${this.apiUrl}`);
  }

  getChatRoom(id: string): Observable<ChatRoom>
  {
    return this._http.get<ChatRoom>(`${this.apiUrl}/${id}`);
  }

  updateChatRoom(id: string, chatRoom: ChatRoom): Observable<ChatRoom>
  {
    return this._http.put<ChatRoom>(`${this.apiUrl}/${id}`, chatRoom);
  }

  deleteChatRoom(id: string): Observable<unknown>
  {
    return this._http.delete<unknown>(`${this.apiUrl}/${id}`);
  }
}
