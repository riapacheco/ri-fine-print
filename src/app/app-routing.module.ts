import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './views/editor/editor.component';
import { EducationComponent } from './views/editor/education/education.component';
import { ProjectsComponent } from './views/editor/projects/projects.component';
import { SkillsComponent } from './views/editor/skills/skills.component';
import { SummaryComponent } from './views/editor/summary/summary.component';
import { WorkXpComponent } from './views/editor/work-xp/work-xp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full',
  },
  {
    path: 'editor',
    component: EditorComponent
  },
  {
    path: 'editor/summary',
    component: SummaryComponent
  },
  {
    path: 'editor/projects',
    component: ProjectsComponent
  },
  {
    path: 'editor/work-xp',
    component: WorkXpComponent
  },
  {
    path: 'editor/skills',
    component: SkillsComponent
  },
  {
    path: 'editor/education',
    component: EducationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
