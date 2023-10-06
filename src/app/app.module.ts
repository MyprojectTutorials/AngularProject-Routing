import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{AppRoutingModule} from './app-routing.module'
import { HeadComponent } from './head/head.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
HeadComponent
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
