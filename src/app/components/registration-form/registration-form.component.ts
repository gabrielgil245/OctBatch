import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm!: FormGroup;

  submitted: boolean = false;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]]
    })
  }
}

// function validateEmail(control: FormControl) {
//   let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
//   return EMAIL_REGEXP.test(control?.value) ? null : {
//     emailInvalid: {
//       message: "Invalid Email Format!"
//     }
//   };
// }