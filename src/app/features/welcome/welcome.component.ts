import { Component, OnInit } from '@angular/core';
import { ITeam } from '../team/interface/team';
import { TeamService } from '../team/services/team.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  pageTitle:string = 'Welcome To Endevor Challenge';
  teams: ITeam[] = [];
  errorMessage: string = '';
  subscription!: Subscription;

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void {
    this.subscription = this._teamService.getTeams().subscribe({
      next: teams => this.teams = teams,
      error: err => this.errorMessage = err
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
