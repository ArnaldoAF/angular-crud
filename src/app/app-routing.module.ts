import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SchoolEditComponent } from './pages/schools/school-edit/school-edit.component';
import { SchoolsComponent } from './pages/schools/schools.component';

const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: "home",
        component: HomepageComponent
    },
    {
        path: "schools",
        component: SchoolsComponent
    },
    {
        path: "schools/add/:id",
        component: SchoolEditComponent
    },
    {
        path: "schools/edit/:id",
        component: SchoolEditComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }