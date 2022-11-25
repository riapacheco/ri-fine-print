import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { EducationComponent } from './views/editor/education/education.component';
import { ProjectsComponent } from './views/editor/projects/projects.component';
import { SkillsComponent } from './views/editor/skills/skills.component';
import { SummaryComponent } from './views/editor/summary/summary.component';
import { WorkXpComponent } from './views/editor/work-xp/work-xp.component';
import { GuardComponent } from './views/guard/guard.component';
import { PrintPreviewComponent } from './views/print-preview/print-preview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'editor/summary',
    pathMatch: 'full'
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
  },
  {
    path: 'status',
    component: GuardComponent
  },
  {
    path: 'print-preview',
    component: PrintPreviewComponent
  },
  {
    path: 'user-confirm',
    component: DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
