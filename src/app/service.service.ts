import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:2900/posts';

  getUsers(userObjhttp : any) {
    return this.http.get(this.rootURL + '/'+userObjhttp.name);
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

  insertUser(userObj : any){
    return this.http.post<any>(this.rootURL, JSON.stringify(userObj));
  }

}