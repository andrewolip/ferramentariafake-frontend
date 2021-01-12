import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emprestimo } from '../models/Emprestimo';
import { Observable } from 'rxjs';
import { Ferramenta } from '../models/Ferramenta';
import { Funcionario } from '../models/Funcionario';

@Injectable({
    providedIn: 'root'
  })
export class FuncionarioService {
    private apiServer = "https://ferramentariafake-frontend.herokuapp.com";

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) { }

    create(funcionario: Funcionario): Observable<Funcionario> {
        return this.httpClient.post<Funcionario>(this.apiServer + '/funcionarios/', JSON.stringify(funcionario), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }  
    
      getAll(): Observable<Funcionario[]> {
        return this.httpClient.get<Funcionario[]>(this.apiServer + '/funcionarios')
        .pipe(
          catchError(this.errorHandler)
        )
      }
    
      update(funcionario: Funcionario): Observable<Funcionario> {
        return this.httpClient.put<Funcionario>(this.apiServer + '/funcionarios/', JSON.stringify(funcionario), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }
    
      delete(id: number){
        return this.httpClient.delete<Funcionario>(this.apiServer + '/funcionarios/' + id, this.httpOptions)
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