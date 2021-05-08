import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { HomeComponent } from './home/home.component';
import { UsersService } from './users/users.service';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from './title/title.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    HighlightDirective,
    TitlePipe,
    PageNotFoundComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
