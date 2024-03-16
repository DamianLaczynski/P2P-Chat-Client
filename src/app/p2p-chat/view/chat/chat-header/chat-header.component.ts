import { Component, Input } from '@angular/core';
import { ChatRoom } from '../../../model/chat-room';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [],
  styleUrl: "chat-header.component.css",
  template: `<div class="chat-header clearfix">
    <div class="row">
      <div class="col-lg-6">
        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
          <img src="{{room?.imageUrl}}" alt="avatar"/>
        </a>
        <div class="chat-about">
          <h6 class="m-b-0">{{room?.name}}</h6>
          <small>{{room?.status}}</small>
        </div>
      </div>
    </div>
  </div>`,
})
export class ChatHeaderComponent {
  @Input({ required: true }) room?: ChatRoom;
}
