import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeaderboardComponent } from './leaderboard.component';

@NgModule({
  declarations: [
    LeaderboardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LeaderboardModule { }
