import { Routes } from '@angular/router';
import { ChatAppComponent } from './p2p-chat/view/chat-app/chat-app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: "", component: LandingPageComponent },
    { path: "chat", component: ChatAppComponent },
    { path: "chat/:id", component: ChatAppComponent }
];
