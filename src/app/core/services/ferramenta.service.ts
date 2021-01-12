import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emprestimo } from '../models/Emprestimo';
import { Observable } from 'rxjs';
import { Ferramenta } from '../models/Ferramenta';

@Injectable({
    providedIn: 'root'
  })
export class FerramentaService {
    private apiServer = "http://localhost:8080";

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) { }

    create(ferramenta: Ferramenta): Observable<Ferramenta> {
        return this.httpClient.post<Ferramenta>(this.apiServer + '/ferramentas/', JSON.stringify(ferramenta), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }  
    
      getAll(): Observable<Ferramenta[]> {
        return this.httpClient.get<Ferramenta[]>(this.apiServer + '/ferramentas')
        .pipe(
          catchError(this.errorHandler)
        )
      }
    
      update(ferramenta: Ferramenta): Observable<Ferramenta> {
        return this.httpClient.put<Ferramenta>(this.apiServer + '/ferramentas/', JSON.stringify(ferramenta), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }
    
      delete(id: number){
        return this.httpClient.delete<Ferramenta>(this.apiServer + '/ferramentas/' + id, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }
      
      errorHandler(error: any) {
         let errorMessage = '';
         if(error.error instanceof ErrorEvent) {           
           errorMessage = error.error.message;
         } else {     
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
         }
         console.log(errorMessage);
         return throwError(errorMessage);
      }
}