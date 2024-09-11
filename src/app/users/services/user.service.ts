import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { IUser } from '../modelo/iuser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url_base: string = "https://jsonplaceholder.typicode.com/users"

  localUsers:IUser[] = [];

  constructor(private _http:HttpClient) { }

  getAll(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.url_base);
  }

  getLocalUsers(): Observable<IUser[]> {
    return of(this.localUsers);  // Usar 'of' para convertir la lista en un Observable
  }
  addUser(user: IUser): void {
    this.localUsers.push(user);
  }
}
