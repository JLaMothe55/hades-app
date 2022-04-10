import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SignInService {    
    backendUrl = 'localhost:8080/api/signInInfo';

  constructor(private http: HttpClient) { }  

  postSignInData(){        
    this.http.post<any>(this.backendUrl, {title: 'Login data'})
    console.log("hey at least we're this far");    
    return 
}
};