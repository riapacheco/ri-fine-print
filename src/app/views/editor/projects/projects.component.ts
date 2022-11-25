import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { QUILL } from 'src/app/constants/quill.constants';
import { IProject } from 'src/app/interfaces/project.interface';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects!: IProject[];

  @ViewChild('scrollBottom') newProject!: ElementRef;

  // Action bar
  button = {
    primary: 'Add Project',
    primaryIcon: 'add',
  };

  showsSpinner = false;
  spin = {
    name: false,
    url: false,
    tools: false,
    description: false
  }
  toolsString!: string;
  modules = QUILL.MODULES;
  style = QUILL.STYLE;

  private sub = new Subscription();
  constructor(
    public resume: ResumeService
  ) { }

  ngOnInit(): void {
    this.projects = this.resume.getProjects();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  private scrollToBottom() {
    setTimeout(() => {
      this.newProject.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  onRemove(id: any) { this.resume.deleteProject(id, this.projects); }

  onClearAll() {
    const projects = this.resume.clearProjects();
    this.projects = projects;
  }

  onAddNew() {
    let lastProjectId = this.projects.length + 1;
    let newProject = {
      id: lastProjectId++,
      name: '',
      description: '',
      url: '',
      tools: [],
      cover_image: '',
      toolsString: '',
      spins: false
    };
    this.projects.push(newProject);
    this.resume.updateProjects(this.projects);
    this.scrollToBottom();
  }

  onUpdate() {
    this.resume.updateProjects(this.projects);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 320);
  }
}
