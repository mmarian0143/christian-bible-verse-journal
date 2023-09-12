import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent {
  entry: any = {};

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.entry.title && this.entry.content && this.entry.date) {
      // Send the new journal entry to the server using HTTP POST
      this.http.post('http://localhost:3000/create-entry', this.entry).subscribe(
        (response) => {
          // Entry creation successful, handle the response
          console.log('Entry created successfully:', response);
        },
        (error) => {
          // Entry creation failed, handle the error
          console.error('Entry creation failed:', error);
        }
      );
    }
  }
}
