import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  data: any;
  getContact() {
    return this.http.get("./assets/contacts_file.json");
  }
}
