import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  baseUrl: String;
    
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://10.80.16.45:8080/familyapp/api/";
    //this.baseUrl = "http://localhost:5000/";
    this.baseUrl = "http://18.191.137.218:5000/";

  }

  
  public register(formdata: any) {

    return this.httpClient.post(this.baseUrl + 'data/register', formdata, httpOptions);
  }
  
  public editmain(formdata: any) {

    return this.httpClient.put(this.baseUrl + 'data/updatemain', formdata, httpOptions);
  }
  public editfamilymember(formdata: any) {

    return this.httpClient.put(this.baseUrl + 'data/updatefamilymember', formdata, httpOptions);
  }
  public savefamilymember(formdata: any) {

    return this.httpClient.post(this.baseUrl + 'data/savefamilymember', formdata, httpOptions);
  }

  public getfamily(id:string,gid:string) {

    return this.httpClient.get(this.baseUrl + 'data/getfamily/'+id+"/"+gid);
  }
  

  public deletefamilymember(id:string,gid:string,mid:string) {

    return this.httpClient.get(this.baseUrl + 'data/deletefamilyrecord/'+id+"/"+gid+"/"+mid);
  }

  public getfamilyrecord(mid:string) {

    return this.httpClient.get(this.baseUrl + 'data/getfamilyrecord/'+mid);
  }

  public getrecord(id:string,gid:string) {

    return this.httpClient.get(this.baseUrl + 'data/getrecord/'+id+"/"+gid);
  }


  public login(mobileno:string) {

    return this.httpClient.get(this.baseUrl + 'data/login/'+mobileno);
  }

  

}
