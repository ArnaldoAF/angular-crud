import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { School } from 'src/app/models/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-school-edit',
  templateUrl: './school-edit.component.html',
  styleUrls: ['./school-edit.component.css']
})
export class SchoolEditComponent implements OnInit {
  id: number;
  header: string;
  school: School = {
    id:0,
    name:'',
    address:'',
    cnpj:''
  };

  constructor(private router: Router,private route: ActivatedRoute, private schoolService: SchoolService) { }

  async ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Criar Escola' : 'Editar Escola';

    if(this.id != 0) {
      this.school = await this.schoolService.onGetSchool(this.id);
    }
  }

  async onSubmit(form: NgForm) {
    const {
      id,
      name,
      address,
      cnpj
    } = form.value;


    let school: School = {
      id,
      name,
      address,
      cnpj
    }

    
    await this.schoolService.onUpdate(school)
    
    
    this.router.navigateByUrl('/schools')
  }

}
