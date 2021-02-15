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

  onGetSchool(id: Number) {
    
  }

  onAdd(school: School) {

  }

  onUpdate(school: School) {

  }

  onDelete(id:Number) {

  }
}
