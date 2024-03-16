import { Component } from '@angular/core';
import { ChatRoomsComponent } from '../chat-rooms/chat-rooms.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-chat-app',
  standalone: true,
  imports: [ChatRoomsComponent, ChatComponent],
  template: `<div class="card chat-app mx-3">
              <app-chat-rooms></app-chat-rooms>
              <app-chat class="chat"></app-chat>
            </div>`,
  styleUrl: './chat-app.component.css'
})
export class ChatAppComponent {

}
