import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/interfaces/account-details.interface';

const API_KEY = '433d2c486572afb242c6fe7c1ddc6771';
const API_BASE_URL = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountDetails(): Observable<AccountDetailsResponse> {
    let sessionId = localStorage.getItem('session_id');
    return this.http.get<AccountDetailsResponse>(
      `${API_BASE_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`
    );
  }
}
