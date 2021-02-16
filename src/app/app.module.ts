import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { SchoolsComponent } from './pages/schools/schools.component';
import { SchoolEditComponent } from './pages/schools/school-edit/school-edit.component';
import { FormsModule } from '@angular/forms';
import { ClassroomsComponent } from './pages/classrooms/classrooms.component';
import { ClassroomEditComponent } from './pages/classrooms/classroom-edit/classroom-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SchoolsComponent,
    SchoolEditComponent,
    ClassroomsComponent,
    ClassroomEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
