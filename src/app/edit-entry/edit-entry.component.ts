import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
export class EditEntryComponent implements OnInit {
  entryId: number = 0;
  entry: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const entryId = +params['id']; 
      console.log('Received entryId:', entryId);
      this.http.get<any>(`http://localhost:3000/journal-entries/${this.entryId}`).subscribe(
        (data) => {
          this.entry = data;
        },
        (error) => {
          console.error('Error fetching journal entry:', error);
        }
      );
    });
  }



  updateEntry() {
    // Prepare the updated entry data
    const updatedEntry = {
      Title: this.entry.Title,
      Content: this.entry.Content,
      Date: this.entry.Date
    };

    // Make an HTTP PUT request to update the entry
    this.http.put(`http://localhost:3000/journal-entries/${this.entryId}`, updatedEntry).subscribe(
      () => {
        // Redirect to the journal entries list after successful update
        this.router.navigate(['/journal-entries']);
      },
      (error) => {
        console.error('Error updating journal entry:', error);
      }
    );
  }
}
