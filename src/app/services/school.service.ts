import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { School } from '../models/school.model';
//import { Http } from '@angular/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as _ from 'lodash';



@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  configUrl = ' http://localhost:3000/schools';

  schoolList: School[];

  constructor(private http: HttpClient) { }

  async onGet():Promise<School[]> {

    const response = await this.http.get<School[]>(this.configUrl).toPromise();
    console.log(response);
    return response;
  }

  async onGetSchool(id: Number):Promise<School> {
    const response = await this.http.get<School>(this.configUrl+"/"+id).toPromise();
    console.log(response);
    return response;
  }

  async onAdd(school: School) {
    console.log(school);
    
    const response = await this.http.post<School>(this.configUrl, school).toPromise();
    console.log("onAdd",response);
    
    return response;
  }

  async onUpdate(school: School) {
    console.log(school);
    const response = await this.http.put<School>(this.configUrl+"/"+school.id, school).toPromise();
    console.log("OnUpdate",response);
    
    return response;
  }

  async onDelete(id:Number) {
    const response = await this.http.delete(this.configUrl+"/"+id).toPromise();
    return response;
  }
}
