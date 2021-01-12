import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Emprestimo } from '../models/Emprestimo';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class EmprestimoService {
    private apiServer = "https://ferramentariafake-frontend.herokuapp.com";

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private httpClient: HttpClient) { }

    create(emprestimo: Emprestimo): Observable<Emprestimo> {
        return this.httpClient.post<Emprestimo>(this.apiServer + '/emprestimos/', JSON.stringify(emprestimo), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }  

      findById(idEmprestimo: number): Observable<Emprestimo> {
        return this.httpClient.get<Emprestimo>(this.apiServer + '/emprestimos/' + idEmprestimo, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }  
    
      getAll(): Observable<Emprestimo[]> {
        return this.httpClient.get<Emprestimo[]>(this.apiServer + '/emprestimos')
        .pipe(
          catchError(this.errorHandler)
        )
      }
    
      update(emprestimo: Emprestimo): Observable<Emprestimo> {
        return this.httpClient.put<Emprestimo>(this.apiServer + '/emprestimos/', JSON.stringify(emprestimo), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }
    
      delete(id: number){
        return this.httpClient.delete<Emprestimo>(this.apiServer + '/emprestimos/' + id, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        )
      }

      devolverFerramenta(emprestimo: Emprestimo) {
        return this.httpClient.put<Emprestimo>(this.apiServer + '/emprestimos/devolverFerramenta', JSON.stringify(emprestimo), this.httpOptions)
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
         console.log(error.error);
         console.log(errorMessage);
         return throwError(error);
      }
}