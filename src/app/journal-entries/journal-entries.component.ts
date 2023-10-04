import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {
  entries: any[] = [];

  constructor(private http: HttpClient,  private router: Router) {}

  ngOnInit() {
    // Fetch journal entries from the server using HTTP GET
    this.http.get<any[]>('http://localhost:3000/journal-entries').subscribe(
      (data) => {
        // Update the entries array with the retrieved data
        this.entries = data;
      },
      (error) => {
        console.error('Error fetching journal entries:', error);
      }
    );
  }
  
  // Method to handle editing a journal entry
  editEntry(entry: any) {
    const entryId = entry.EntryID; 
    this.router.navigate(['/edit-entry', entryId]); 
  }

  // Method to handle deleting a journal entry
  deleteEntry(entry: any) {
    const entryId = entry.EntryID; 

    // Make an HTTP DELETE request to delete the entry
    this.http.delete(`http://localhost:3000/journal-entries/${entryId}`)
      .subscribe(
        () => {
          this.entries = this.entries.filter(e => e.EntryID !== entryId);
        },
        (error) => {
          console.error('Error deleting journal entry:', error);
        }
      );
  }
}
