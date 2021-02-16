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
  selectedSchool:string;

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

  async changeSchool() {
    console.log("changeSchool");
    console.log("this.selectedSchool", this.selectedSchool);
    if (this.selectedSchool == "0") {
      await this.ReloadList()
    }
    else {
      await this.ReloadList();
      this.classroomList = this.classroomList.filter(x=> x.id_school == +this.selectedSchool);
    }

  }

}
