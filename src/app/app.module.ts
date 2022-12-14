import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCaptureModule } from 'ngx-capture';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SummaryComponent } from './views/editor/summary/summary.component';
import { ProjectsComponent } from './views/editor/projects/projects.component';
import { WorkXpComponent } from './views/editor/work-xp/work-xp.component';
import { SkillsComponent } from './views/editor/skills/skills.component';
import { EducationComponent } from './views/editor/education/education.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SidebarService } from './services/sidebar.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PrintPreviewService } from './services/print-preview.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ScrollService } from './services/scroll.service';
import { GuardComponent } from './views/guard/guard.component';
import { ToastService } from './services/toast.service';
import { ToastComponent } from './components/toast/toast.component';
import { DocViewerComponent } from './views/doc-viewer/doc-viewer.component';
import { ResizeLRDirective } from './directives/resize-lr.directive';
import { DocComponent } from './views/doc-viewer/doc/doc.component';
import { GeneratePdfService } from './services/generate-pdf.service';
import { ResumeService } from './services/resume.service';
import { PrintPreviewComponent } from './views/print-preview/print-preview.component';
import { DialogComponent } from './components/dialog/dialog.component';



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
    SpinnerComponent,
    GuardComponent,
    ToastComponent,
    DocViewerComponent,
    ResizeLRDirective,
    DocComponent,
    PrintPreviewComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    QuillModule.forRoot(),
    PdfViewerModule,
    DragDropModule,
    LayoutModule,
    BrowserAnimationsModule,
    NgxCaptureModule
  ],
  providers: [
    SidebarService,
    PrintPreviewService,
    ScrollService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ToastService,
    GeneratePdfService,
    ResumeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
