import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any = {};

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.user.username && this.user.password) {
      // Send login data to the server using HTTP POST to your login API endpoint
      this.http.post('http://localhost:3000/login', this.user).subscribe(
        (response) => {
          // Login successful, handle the response
          console.log('Login successful:', response);
        },
        (error) => {
          // Login failed, handle the error
          console.error('Login failed:', error);
        }
      );
    }
  }
}
