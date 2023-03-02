import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { dataModel } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // public user = new Subject<string>();
  public user = new BehaviorSubject<string>('');
  constructor(public http: HttpClient) { }

  getData(): Observable<any>{
  return  this.http.get('https://api.covidtracking.com/v1/us/daily.json')
  }
  getSecData(): Observable<any>{
  return  this.http.get('https://api.covidtracking.com/v1/states/daily.json')
  }

  
  deletData(id:string):Observable<any>{
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };

    const url = "https://api.covidtracking.com/v1/us/daily.json/" + id;
    return this.http.delete(url, {headers})
  }

  insertData(data:dataModel){
  
    const headers = {  'Access-Control-Allow-Origin':'*', 'Authorization':'authkey',
    'userid':'1','My-Custom-Header': 'foobar' }
    this.http.post<any>('https://api.covidtracking.com/v1/us/daily.json', data).subscribe(data => {
        
        
    });
  }
}
