import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schoolList: School[];

  constructor(private schoolService: SchoolService) { }

  async ngOnInit() {
    this.schoolList = [];
    this.schoolList = await this.schoolService.onGet();
  }

  onDelete(id:Number) {
    this.schoolService.onDelete(id)
  }

}
