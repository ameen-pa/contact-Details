import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSevicesService {
  constructor(private http:HttpClient){}

  allContacts(){
    return this.http.get('https://dummyjson.com/users')
  }
  

  
}
