import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [],
  template: `<div class="input-group mx-1">
                <input #messageInput type="text" class="form-control" name="messageInput" placeholder="Enter text here..." (keyup.enter)="submitText.emit(messageInput.value); messageInput.value = '';"> 
                <button class="btn input-group-prepend">
                  <span class="input-group-text p-3"><i class="fa fa-send"></i></span>
                </button>                                   
              </div>`
})

export class ChatMessageComponent {
  @Output() submitText = new EventEmitter<string>();
}
