import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ITeam } from '../interface/team';

@Injectable({
  providedIn: 'root'
})

export class TeamService {
  private _teamsUrl = 'api/teams/teams.json';

  constructor(private _http: HttpClient) { }

  getTeams(): Observable<ITeam[]> {
    return this._http.get<ITeam[]>(this._teamsUrl).pipe(
      tap(data => console.log('all', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occoured ${err.error.message}`
    } else {
      errorMessage = `Server returned code ${err.status}, error message is: ${err.message}`
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
