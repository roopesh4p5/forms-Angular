import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserregService {

  constructor(private http:HttpClient) {}
  datafetched:any;
  data(){
  this.datafetched=this.http.get('http://localhost:3000/users')
  // console.log(this.datafetched)
  return this.datafetched;
}
}
