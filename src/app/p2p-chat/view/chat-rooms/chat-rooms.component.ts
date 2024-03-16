import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ChatRoom } from '../../model/chat-room';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { SubmitTextComponent } from './submit-text.component';
import { ChatRoomService } from '../../service/chat-room.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-rooms',
  standalone: true,
  imports: [RoomsListComponent, SubmitTextComponent],
  styles: `
  .people-list {
    -moz-transition: .5s;
    -o-transition: .5s;
    -webkit-transition: .5s;
    transition: .5s
}

.people-list {
    width: 280px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    z-index: 7,
}

@media only screen and (max-width: 767px) {
    .people-list {
        height: 465px;
        width: 100%;
        overflow-x: auto;
        background: #fff;
        left: -400px;
        display: none
    }
    .people-list.open {
        left: 0
    }
}

`,
  template: `<div id="plist" class="people-list">
  <app-submit-text (submitText)="submitText($event)"></app-submit-text>
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
    this.roomsSub = this._chatRoomService.getAll().subscribe({
      next: (response) => {
        this.rooms = response;
        this.filteredRooms = this.filterChatRoomsByName(this.rooms, "");
      },
      error: (err) => {
        console.log(err);
      }
    });
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
