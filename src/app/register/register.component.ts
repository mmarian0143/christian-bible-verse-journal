import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  user: any = {}; // Define a user object to hold form data

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.user; // Use the user object to send form data

      this.http.post('http://localhost:3000/register', userData).subscribe(
        (response) => {
          // Handle success response
          console.log('Registration successful!', response);
        },
        (error) => {
          // Handle error
          console.error('Registration failed:', error);
        }
      );
    }
  }

  // Convenience getter for easy access to form fields
  get formControls() {
    return this.registerForm.controls;
  }
}
