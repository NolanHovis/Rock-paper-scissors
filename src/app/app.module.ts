import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RockComponent } from './rock/rock.component';
import { PaperComponent } from './paper/paper.component';
import { ScissorsComponent } from './scissors/scissors.component';
import { PaperLossComponent } from './paper/paper-loss/paper-loss.component';
import { RockLossComponent } from './rock/rock-loss/rock-loss.component';
import { ScissorsLossComponent } from './scissors/scissors-loss/scissors-loss.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RockComponent,
    PaperComponent,
    ScissorsComponent,
    PaperLossComponent,
    RockLossComponent,
    ScissorsLossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
