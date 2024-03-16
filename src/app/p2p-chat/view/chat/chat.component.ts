import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatRoom } from '../../model/chat-room';
import { User } from '../../model/user';
import { Subscription } from 'rxjs';
import { UserService } from '../../service/user.service';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatRoomService } from '../../service/chat-room.service';
import { MessageService } from '../../service/message.service';
import { Message } from '../../model/message';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, CommonModule, ChatBodyComponent, ChatHeaderComponent],
  template: `
    <app-chat-header [room]="room"></app-chat-header>
    <app-chat-body [chatHistory]="messages" [user]="user" (sendMessage)="sendMessage($event)"></app-chat-body>`
})
export class ChatComponent implements OnInit, OnDestroy {
  room!: ChatRoom;
  user!: User;
  messages!: Message[];
  userSub!: Subscription;
  roomSub!: Subscription;
  messageSub!: Subscription;

  constructor(
    private _userService: UserService,
    private _roomService: ChatRoomService,
    private _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.userSub = this._userService.get().subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.roomSub = this._roomService.get('room1').subscribe({
      next: (response) => {
        this.room = response;
      },
      error: (err) => {
        console.error(err);
      },
    });

    this.messageSub = this._messageService.getAll().subscribe({
      next: (response) => {
        this.messages = response;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
    this.roomSub.unsubscribe();
  }

  sendMessage(text: string) {
    console.log('send: ' + text);
  }
}
