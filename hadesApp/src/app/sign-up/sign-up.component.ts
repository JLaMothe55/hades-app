import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import {SignUpService} from './sign-upService.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})

export class SignUpComponent implements OnInit{
  submissionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService
  ) { }

  ngOnInit(): void{
    this.submissionForm = new FormGroup({
      email: new FormControl('',
        Validators.required
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ),
      firstName: new FormControl('',
        [
          Validators.required,
          Validators.minLength(1)
        ]
      ),
      lastName: new FormControl('',
        [
          Validators.required,
          Validators.minLength(1)
        ]
      )
    })
  }

  get email(){ return this.submissionForm.get('email');}
  get firstName(){ return this.submissionForm.get('firstName');}
  get lastName(){ return this.submissionForm.get('lastName');}
  get password(){ return this.submissionForm.get('password');}

  onSubmit(): void {

    if(
      this.submissionForm.get('email')?.value &&
      this.submissionForm.get('firstName')?.value &&
      this.submissionForm.get('lastName')?.value &&
      this.submissionForm.get('password')?.value 
    ){
      console.log("signUp submission");
      this.signUpService.postSignUpData(
        this.submissionForm.get('email')?.value,
        this.submissionForm.get('firstName')?.value,
        this.submissionForm.get('lastName')?.value,
        this.submissionForm.get('password')?.value 
      );
    }
    this.submissionForm.reset();
  }

}
