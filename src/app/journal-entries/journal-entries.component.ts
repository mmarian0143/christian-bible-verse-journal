import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {
  entries: any[] = [];

  constructor(private http: HttpClient) {}

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
}
