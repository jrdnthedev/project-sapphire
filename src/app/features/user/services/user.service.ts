import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userUrl = 'api/users/users.json';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._userUrl).pipe(
      tap(data => console.log('all', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUserByTeam(name: string): Observable<IUser[] | undefined> {
    return this.getUsers().pipe(
      map((user:IUser[]) => user.filter(u => u.teamname === name))
    );
  }
  handleError(err: HttpErrorResponse) {
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
