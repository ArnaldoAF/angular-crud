import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Classroom } from '../models/classroom.model';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SchoolService } from './school.service';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  configUrl = ' http://localhost:3000/classrooms';

  constructor(private http: HttpClient, private schoolService: SchoolService) { }

  async onGet():Promise<Classroom[]> {

    const response = await this.http.get<Classroom[]>(this.configUrl).toPromise();
    const schools =  await this.schoolService.onGet();
    const responseWithSchools =  response.map(classroom => {
      let school = schools.find(x => x.id == classroom.id_school);
      console.log("schools", schools)
      return {
        ...classroom,
        school
      }

    })
    console.log("responseWithSchools",responseWithSchools);
    return responseWithSchools;
  }

  async onGetSchool(id: Number):Promise<Classroom> {
    const response = await this.http.get<Classroom>(this.configUrl+"/"+id).toPromise();
    console.log(response);
    return response;
  }

  async onAdd(classroom: Classroom) {
    console.log(classroom);
    
    const response = await this.http.post<Classroom>(this.configUrl, classroom).toPromise();
    console.log("onAdd",response);
    
    return response;
  }

  async onUpdate(classroom: Classroom) {
    console.log(classroom);
    const response = await this.http.put<Classroom>(this.configUrl+"/"+classroom.id, classroom).toPromise();
    console.log("OnUpdate",response);
    
    return response;
  }

  async onDelete(id:Number) {
    const response = await this.http.delete(this.configUrl+"/"+id).toPromise();
    return response;
  }
}
