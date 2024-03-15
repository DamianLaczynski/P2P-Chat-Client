import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  template: `<div class="input-group">
  <input #searchInput type="text" name="searchInput" class="form-control" placeholder="Search..." (keyup)="submitText.emit(searchInput.value);">
</div>`
})
export class SearchComponent {
  @Output() submitText = new EventEmitter<string>();
}
