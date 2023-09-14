import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserMailing {
    firstName?: string;
    lastName?: string;
    email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MailingListService  {
    private apiUrl = 'https://localhost:7193/UserMailingList/?';
    constructor(private http: HttpClient) { }

    getMailingList(LastName?: string, ascending?: boolean): Observable<UserMailing[]> {
        const params: any = {};
        params.LastName = LastName;
        
        if (ascending !== undefined) {
            params.ascending = ascending;
        }

        return this.http.get<UserMailing[]>(this.apiUrl, { params });
    }
}
