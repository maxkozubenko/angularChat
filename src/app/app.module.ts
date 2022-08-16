import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedComponentsModule} from "./shared/shared-components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './components/chat/chat.component';
import { ChatMenuComponent } from './components/chat-menu/chat-menu.component';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { ChatContactsComponent } from './components/chat-contacts/chat-contacts.component';
import { ChatDetailsComponent } from './components/chat-details/chat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatMenuComponent,
    ChatMessagesComponent,
    ChatContactsComponent,
    ChatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
