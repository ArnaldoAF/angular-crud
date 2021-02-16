import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Classroom } from 'src/app/models/classroom.model';
import { ClassroomService } from 'src/app/services/classroom.service';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styleUrls: ['./classroom-edit.component.css']
})
export class ClassroomEditComponent implements OnInit {

  id: number;
  operation: boolean;
  selectedSchool:string;
  selectedGrade: string;
  schoolList: School[];
  classroom: Classroom = {
    id:0,
    grade:'',
    year:'',
    class:'',
    id_school:0
  };

  constructor(private router: Router,private route: ActivatedRoute, private classroomService: ClassroomService, private schoolService: SchoolService) { }

  async ngOnInit() {
    this.schoolList = await this.schoolService.onGet();
    this.id = +this.route.snapshot.paramMap.get('id');
    this.operation = this.id === 0;

    if(this.id != 0) {
      this.classroom = await this.classroomService.onGetClassroom(this.id);
    }
  }

  async onSubmit(form: NgForm) {
    const {
      
      year,
      classe
      
    } = form.value;
    console.log(form);
    const {
      value:id
    } = form.control.controls.id;

    let classroom: Classroom = {
      id,
      grade: this.selectedGrade,
      year,
      class: classe,
      id_school: +this.selectedSchool
    }
    console.log(classroom);

    if(this.id === 0) 
      await this.classroomService.onAdd(classroom);
    else
      await this.classroomService.onUpdate(classroom);
    
    this.router.navigateByUrl('/classrooms')
  }

  async onDelete(id:number) {
    await this.classroomService.onDelete(id);
    this.router.navigateByUrl('/classrooms')
  }


}
