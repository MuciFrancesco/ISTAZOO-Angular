import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { LikeComponent } from './components/like/like.component';
import { SerchbarComponent } from './components/serchbar/serchbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import {HttpClientModule} from "@angular/common/http";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from '../app/pages/home/home.component' //import base per chiamate http angular
import { LocalService } from './services/local.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDetailComponent,
    FooterComponent,
    LikeComponent,
    SerchbarComponent,
    TopbarComponent,
    LandingPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
