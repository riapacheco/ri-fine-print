import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
import { PrintPreviewComponent } from './components/print-preview/print-preview.component';
import { SidebarService } from './services/sidebar.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrintPreviewService } from './services/print-preview.service';
import { PreviewComponent } from './components/preview/preview.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ScrollService } from './services/scroll.service';
import { GuardComponent } from './views/guard/guard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    
    SummaryComponent,
    ProjectsComponent,
    WorkXpComponent,
    SkillsComponent,
    EducationComponent,
    InputsComponent,
    ActionBarComponent,
    PrintPreviewComponent,
    PreviewComponent,
    SpinnerComponent,
    GuardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    QuillModule.forRoot(),
    PdfViewerModule,
    DragDropModule,
    LayoutModule
  ],
  providers: [
    SummaryService,
    ProjectService,
    WorkService,
    SkillService,
    SidebarService,
    PrintPreviewService,
    ProjectService,
    ScrollService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
