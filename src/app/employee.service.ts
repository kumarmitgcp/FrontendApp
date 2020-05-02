import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://35.184.136.165:8080/api/employees';

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]> {  
    
    return this.http.get<Employee[]>(this.url).pipe(
      tap (data => console.log('All employee: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }   

  private handleError(err: HttpErrorResponse){

    let errorMessage = '';
    if (err.error instanceof ErrorEvent){

      errorMessage = `An error occured: ${err.error.message}`;
      
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  } 

}
