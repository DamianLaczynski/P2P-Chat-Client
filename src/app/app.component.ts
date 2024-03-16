import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  styles: `app-chat-app {
    width: 100vw;
}`,
  template: `<div>
     <app-navbar></app-navbar>
      <router-outlet></router-outlet>
    </div>`,
})
export class AppComponent {
  title = 'p2p-client';
}
