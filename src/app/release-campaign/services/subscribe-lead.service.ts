import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TotalLeadsResponse } from "../../interfaces/leads-response.interface";

@Injectable({
  providedIn: 'root'
})
export class SubscribeLeadService {
  private SHEET_URL = '/google-url/macros/s/AKfycbwoHudBipkRcKz53EoDAtI00ObYMvEuVghqThfUPscoU6ncVBcmbHrvg8mvV-1gnS-eAA/exec';
   
  http = inject(HttpClient);

  add(emailOrCellphone: string): Observable<unknown> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'text/plain')
      .set('Accept', '*/*');

    const options = {
      headers: headers,
      withCredentials: false
    };

    const body = {
      email: emailOrCellphone
    };

    return this.http.post(this.SHEET_URL, body, options);
  }

  getTotal(): Observable<TotalLeadsResponse> {
    return this.http.get<TotalLeadsResponse>(this.SHEET_URL);
  }
}