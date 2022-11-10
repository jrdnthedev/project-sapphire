import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { CategoryComponent } from './features/category/category.component';
import { UserComponent } from './features/user/user.component';
import { TeamComponent } from './features/team/team.component';
import { RulesComponent } from './features/rules/rules.component';
import { InputComponent } from './features/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LeaderboardComponent,
    CategoryComponent,
    UserComponent,
    TeamComponent,
    RulesComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
