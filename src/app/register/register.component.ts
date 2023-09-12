import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.user.username && this.user.password && this.user.email) {
      // Send registration data to the server using HTTP POST
      this.http.post('http://localhost:3000/users', this.user).subscribe(
        (response) => {
          // Registration successful, handle the response
          console.log('Registration successful:', response);
        },
        (error) => {
          // Registration failed, handle the error
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
