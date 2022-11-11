import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
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

  //get team by id using teams list returned from getTeams call
  getTeam(id: number): Observable<ITeam | undefined> {
    return this.getTeams().pipe(
      //use map to turn teams into array then use find on that array to match passed in id with one in the list if it exists
      map((team:ITeam[]) => team.find(t => t.id === id))
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
