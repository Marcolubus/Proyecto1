import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthComponent } from './auth/auth.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AuthComponent,
    HomeComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
