import {Injectable} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SignUpService {    
    backendUrl = 'localhost:8080/api/SignUpInfo';
      
    constructor(private http: HttpClient) { }
  
    postSignUpData(email: any, firstName: any, lastName: any, password: any){        
        this.http.post<any>(this.backendUrl, {signupEmail: email, signupFirstName: firstName, signupLastName: lastName, signupPassword: password})
        console.log(email);    
        return  
    }
};