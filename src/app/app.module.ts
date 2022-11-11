import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { WelcomeModule } from './features/welcome/welcome.module';
import { CategoryModule } from './features/category/category.module';
import { LeaderboardModule } from './features/leaderboard/leaderboard.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    CategoryModule,
    LeaderboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
