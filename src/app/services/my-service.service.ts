import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private _http:HttpClient) {
    
   }
/*
  get () : void {
    this._http.get()
    
  }*/
}
