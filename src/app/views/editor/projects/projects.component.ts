import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { QUILL } from 'src/app/constants/quill.constants';
import { IProject } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  projects!: IProject[];

  @ViewChild('scrollBottom') newProject!: ElementRef;
  // Action bar
  button = {
    primary: 'Add Project',
    primaryIcon: 'add',
  };

  spin = {
    name: false,
    url: false,
    tools: false,
    description: false
  }
  toolsString!: string;
  modules = QUILL.MODULES;
  style = QUILL.STYLE;
  viewTitle = 'Projects';
  @ViewChild('nameFieldElement') nameField!: ElementRef;
  private sub = new Subscription();
  constructor(
    public projService: ProjectService
  ) { }

  ngOnInit(): void {
    this.loadProjectData();
  }
  ngAfterViewInit() {
    // this.nameField.nativeElement.focus();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadProjectData() {
    this.sub.add(this.projService.getProjects().subscribe((data: IProject[]) => {
      this.projects = data;
    }))
  }

  private stopAllSpinners() {
    this.spin = {
      name: false,
      url: false,
      tools: false,
      description: false
    }
  }
  private convertToArray() {
    this.projects.map((project: IProject) => {
      if (project.toolsString) {
        project.tools = project.toolsString.split(', ');
      }
    })
  }

  onAddNew() {
    const newBlankProject = {
      name: 'NewProject',
      description: '',
      url: '',
      cover_image: '',
      tools: [],
      toolsString: ''
    }
    this.projects.push(newBlankProject);
    setTimeout(() => {
      this.newProject.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  onUpdate(field: string) {
    switch (field) {
      case 'name':
        this.spin.name = true;
        this.convertToArray();
        break;
      case 'url':
        this.spin.url = true;
        this.convertToArray();
        break;
      case 'tools':
        this.spin.tools = true;
        this.convertToArray();
        break;
      case 'description':
        this.spin.description = true;
        this.convertToArray();
        break;
    }
    this.projService.updateProjects(this.projects);
    setTimeout(() => {
      this.stopAllSpinners();
    }, 520);
  }
}
