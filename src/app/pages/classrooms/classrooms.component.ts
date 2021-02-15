import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/models/classroom.model';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  classroomList: Classroom[];
  schoolList: School[];

  constructor(private classroomService: ClassroomService, private schoolService: SchoolService) { }

  async ReloadList() {
    this.classroomList = [];
    this.classroomList = await this.classroomService.onGet();
  }

  async ngOnInit() {
    await this.ReloadList();
    this.schoolList = await this.schoolService.onGet();
  }

  async onDelete(id:number) {
    await this.classroomService.onDelete(id);
    await this.ReloadList();
  }

}
