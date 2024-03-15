import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatRoom } from '../model/chat-room';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `<ul class="list-unstyled chat-list mt-2 mb-0">
                <li *ngFor="let room of rooms" class="clearfix" (click)="chooseRoom.emit(room.id)">
                    <img src="{{room.imageUrl}}" alt="avatar">
                    <div class="about">
                        <div class="name">{{room.name}}</div>
                        <div class="status"> <i [class]="room.status === 'active' ? 'fa fa-circle online': 'fa fa-circle offline' "></i>{{room.status}}</div>                                            
                    </div>
                </li>
                <li *ngIf="rooms.length < 1" class="">Nothig found</li>
              </ul>`
})
export class RoomsListComponent {
  @Input({required: true}) rooms: ChatRoom[] = [];
  @Output() chooseRoom = new EventEmitter<string>();
}
