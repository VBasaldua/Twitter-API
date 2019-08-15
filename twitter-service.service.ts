import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UiComponent } from './TwitterFrontEnd/ui/ui.component';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class TwitterServiceService {

  
  apiURL = 'localhost:8080/user';
  handleError: any;
  constructor(private http: HttpClient) 
  {
   }

  httpOptions = {
    headers: new HttpHeaders
    ({
      'Content-Type': 'application/json'
    })}

  createUser(TwitterUser:string): Observable<any>
  { 
    return this.http.post<string>(this.apiURL + '/addTwitter', JSON.stringify({'username':TwitterUser}), this.httpOptions).
    pipe
    (
      retry(1),
    catchError(this.HandleError)
    )
  }

  HandleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
