import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ButtonsComponent } from './shared/components/buttons/buttons.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './shared/components/card/card.component';
import { BpObserverService } from './shared/services/bp-observer.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonsComponent,
    HeaderComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [ BpObserverService],
  bootstrap: [AppComponent],
})
export class AppModule {}
