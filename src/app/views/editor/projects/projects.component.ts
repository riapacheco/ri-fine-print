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

  blankProject = {
    name: 'NewProject',
    description: '',
    url: '',
    cover_image: '',
    tools: [],
    toolsString: '',
    spins: false
  }
  @ViewChild('projectNameElement') projectNameElement!: ElementRef;
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
      data.map((project: IProject) => {
        project.spins = false;
      })
      this.projects = data;
      console.log(this.projects);
    }))
  }

  onClearAll() {
    this.projects = [];
    this.projService.onClearProjects();

    setTimeout(() => {
      this.projectNameElement.nativeElement.focus();
    }, 100);
  }

  onRemove(value: any){
    this.projService.removeProject(value, this.projects);
  }

  onAddNew() {
    let lastId = this.projects.length+1;
    const project = {
      id: lastId++,
      name: 'Project ',
      description: '',
      url: '',
      cover_image: '',
      tools: [],
      toolsString: '',
      spins: false
    }
    this.projects.push(project);
    this.projService.updateProjects(this.projects);
    setTimeout(() => {
      this.newProject.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  onUpdate(field: string) {

    this.projService.updateProjects(this.projects);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 320);
  }
}
