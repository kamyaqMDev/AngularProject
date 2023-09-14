import { Component } from '@angular/core';
import { MailingListService,UserMailing } from '../services/userEmail.service';


@Component({
  selector: 'app-user-mailing-list-form',
  
  template: `
    <h2>Search Mailing List Entries</h2>
    
    <label>
      Filter by Last Name:
      <input [(ngModel)]="lastName">
    </label>
    
    <label>
      Sort Order:
      <select [(ngModel)]="ascending">
        <option [value]="true">Ascending</option>
        <option [value]="false">Descending</option>
      </select>
    </label>
    
    <button (click)="fetchData()">Fetch Data</button>
    
    <ul>
      <li *ngFor="let entry of entries">
        {{ entry.lastName }}, {{ entry.firstName }} - {{ entry.email }}
      </li>
    </ul>
  `,
  styleUrls: ['./user-mailing-list-form.component.css']

})
export class UserMailingListFormComponent {

    lastName?: string;
    ascending = true;
    entries: UserMailing[] = [];

    constructor(private mailingListService: MailingListService) { }

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(): void {
       this.mailingListService.getMailingList(this.lastName, this.ascending).subscribe((entries: UserMailing[]) => {
           this.entries = entries;
           console.log(this.entries);
        });
    }
  
  }
