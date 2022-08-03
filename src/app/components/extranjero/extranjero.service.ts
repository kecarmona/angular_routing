import { catchError, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExtranjeroService {
  constructor(protected httpClient: HttpClient) {}

  getExteranjeroInf(): Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/ditto').pipe(
      map((response) => {
        return response;
      }),
      catchError((err) => {
        throw err;
      })
    );
  }
}
