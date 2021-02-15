import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
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
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }