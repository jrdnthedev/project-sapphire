import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user/services/user.service';
import { TeamService } from './services/team.service';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: any;
  teamUsers: any;
  errorMessage: string = '';
  subscription!: Subscription;
  subscription2!: Subscription;

  constructor(private _teamService: TeamService,private _route: ActivatedRoute,private _userService: UserService,private _router:Router) { }

  ngOnInit(): void {
    const id = Number(this._route.snapshot.paramMap.get('id'));
    if(id) {
      this.getTeam(id);
    }
    const teamname = this.team.name;
    if(teamname) {
      this.getUserByTeam(teamname);
      console.log(this.teamUsers)
    }
  }

  getTeam(id: number): void {
    this.subscription = this._teamService.getTeam(id).subscribe({
      next: team => {
        this.team = team
      },
      error: err => this.errorMessage = err
    })
  }

  getUserByTeam(name: string): void {
    this.subscription2 = this.teamUsers = this._userService.getUserByTeam(name).subscribe({next: users => this.teamUsers = users})
  }

  onBack(): void {
    this._router.navigate(['/welcome']);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
