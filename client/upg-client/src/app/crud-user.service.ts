import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN } from 'src/config';
import { User } from './user-crud/user-crud.component';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {
  basePath ='localhost:8080';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': TOKEN });

  constructor(private http: HttpClient) {

   }

   createUser(body: User){
    let params = new HttpParams();

    
    return this.http.post(`${this.basePath}/createuser`, body, { headers: this.headers} )
  }
}
