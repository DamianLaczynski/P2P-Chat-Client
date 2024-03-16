import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Message } from '../../../model/message';
import { CommonModule, NgFor } from '@angular/common';
import { User } from '../../../model/user';
import { ChatMessageComponent } from '../chat-message.component';

@Component({
  selector: 'app-chat-body',
  standalone: true,
  imports: [NgFor, ChatMessageComponent, CommonModule],
  styleUrl: "./chat-body.component.css",
  template: `<div #chatContainer class="chat-history" style="overflow-y: scroll; height: 60vh; " [scrollTop]="chatContainer.scrollHeight">
  <ul class="m-b-0" >
      <li *ngFor="let message of chatHistory" class="clearfix">
          <div class="message-data" [class]="message.user.id === user.id ? 'd-flex justify-content-end':'' ">
              <span class="message-data-time">{{message.sendTime | date:'short'}}  </span>
              <img src="{{message.user.profileImageUrl}}" alt="avatar">
          </div>
          <div class="message" [class]="message.user.id === user.id ? 'my-message float-right':'other-message' ">{{message.content}}</div>
      </li>
  </ul>
</div>
<app-chat-message class="chat-message clearfix" (submitText)="sendMessage.emit($event)"></app-chat-message>
`
})
export class ChatBodyComponent {
  @Input() chatHistory: Message[] = [];
  @Input() user!: User;
  @Output() sendMessage = new EventEmitter<string>();

  @ViewChild('chatContainer', {static: false}) private chatContainer?: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }
  }
}
