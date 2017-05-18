import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EntryListService {

  constructor(private http: Http) {}
  // getList() {
  //   this
  //   .http.get('http://localhost:3000/api/journal-entries')
  //   .subscribe((data) => console.log(data));
  // }

  getList() {
   return this.http.get('http://localhost:3000/api/journal-entries/')
     .map((res) => res.json());
 }

 get(id) {
  return this.http.get('http://localhost:3000/api/journal-entries/:id')
    .map((res) => res.json());
}

}
