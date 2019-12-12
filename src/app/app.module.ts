import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './header/header.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryListComponent,
    MainComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
