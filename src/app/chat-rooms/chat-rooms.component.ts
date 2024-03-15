import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ChatRoom } from '../model/chat-room';
import { RoomsListComponent } from './rooms-list.component';
import { SearchComponent } from './search.component';
import { ChatRoomService } from '../service/chat-room.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-rooms',
  standalone: true,
  imports: [RoomsListComponent, SearchComponent],
  template: `<div id="plist" class="people-list">
  <app-search (submitText)="submitText($event)"></app-search>
  <app-rooms-list [rooms]="filteredRooms" (chooseRoom)="chooseRoom($event)"></app-rooms-list>
</div>`
})
export class ChatRoomsComponent implements OnInit, OnDestroy{
  rooms: ChatRoom[] = [];
  filteredRooms: ChatRoom[] = [];
  roomsSub: Subscription = new Subscription();

  constructor(private _chatRoomService: ChatRoomService)
  {

  }

  ngOnInit(): void {
    this.roomsSub = this._chatRoomService.getAllChatRooms().subscribe(
      (response) => {
        this.rooms = response;
        this.filteredRooms = this.filterChatRoomsByName(this.rooms, "");
      },
      (error) =>
      {
        console.log(error);
      }
      );
  }

  ngOnDestroy(): void {
    this.roomsSub.unsubscribe();
  }

  chooseRoom(id: string)
  {
      console.log("Room " + id);
  }

  submitText(text: string)
  {
      this.filteredRooms = this.filterChatRoomsByName(this.rooms, text);
      console.log("Search for: " + text);
  }

  filterChatRoomsByName(chatRooms: ChatRoom[], name: string): ChatRoom[] {
    return chatRooms.filter(room => room.name.toLowerCase().includes(name.toLowerCase()));
}
}
