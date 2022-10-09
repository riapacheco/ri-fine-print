import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EditorComponent } from './views/editor/editor.component';
import { SummaryComponent } from './views/editor/summary/summary.component';
import { ProjectsComponent } from './views/editor/projects/projects.component';
import { WorkXpComponent } from './views/editor/work-xp/work-xp.component';
import { SkillsComponent } from './views/editor/skills/skills.component';
import { EducationComponent } from './views/editor/education/education.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SummaryService } from './services/summary.service';
import { ProjectService } from './services/project.service';
import { WorkService } from './services/work.service';
import { SkillService } from './services/skill.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EditorComponent,
    SummaryComponent,
    ProjectsComponent,
    WorkXpComponent,
    SkillsComponent,
    EducationComponent,
    InputsComponent,
    ActionBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [
    SummaryService,
    ProjectService,
    WorkService,
    SkillService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
