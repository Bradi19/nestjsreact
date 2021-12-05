import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
  })
export class ConfigService {
    private REST_API_SERVER = "http://localhost:3000/api/items";
    constructor(private http: HttpClient) { }

    public sendGetRequest() {
        return this.http.get(this.REST_API_SERVER);
    }
}