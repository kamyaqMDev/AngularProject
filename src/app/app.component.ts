import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MailingListService, UserMailing } from './services/userEmail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  
})
export class AppComponent {
  title = 'Add User Mailing';
  
  user = {
    lastName: '',
    firstName: '',
    email: ''
  };

  
  LastName?: string;
    ascending = true;
    UserEmails: UserMailing[] = [];
  confirmation = '';

  
  constructor(private mailingListService: MailingListService,private http: HttpClient) { }
  ngOnInit() : void{
    this.fetchUserData();
    
  }



fetchUserData() : void{
  this.mailingListService.getMailingList(this.LastName, this.ascending).subscribe(entries => {
    this.UserEmails = entries;
  });
}

  onSubmit() {
    this.http.post('https://localhost:7193/UserMailingList', this.user).subscribe(() => {
      this.confirmation = 'User has been added!';
    }, error => {
      console.error('Failed to submit:', error);
    });
  }
}


