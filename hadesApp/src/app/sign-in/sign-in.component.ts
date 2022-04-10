import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { SignInService } from './sign-inService.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})
export class SignInComponent {
  submissionForm = this.formBuilder.group({
    email: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private signInService: SignInService
  ) { }

  onSubmit(): void {
    console.log("login submission");

    console.log(this.formBuilder.group);

    this.signInService.postSignInData();

    this.submissionForm.reset();
  }

}
