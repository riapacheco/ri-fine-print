import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProject } from '../interfaces/project.interface';

export const PROJECTS_INIT_STATE: IProject[] = [
  {
    id: 1,
    name: 'RiReader',
    description: 'RiReader is an application offered on Web, iOS, and Android, which enables a user to both consume and retain data they\'ve read from a physical book.',
    url: 'https://rireader.app',
    tools: [
    ],
    cover_image: '',
    toolsString: 'Typescript, Angular, TesseractJS (OCR), Capacitor (iOS/Android), @riapacheco/yutes',
    spins: false
  },
  {
    id: 2,
    name: 'FinePrint',
    spins: false,
    description: `FinePrint is a free web application for building print- and download-friendly docs with responsive templates that adjust themselves as they're populated.`,
    url: 'https://fine-print.app',
    tools: [],
    cover_image: '',
    toolsString: 'TypeScript, JavaScript, Angular, jsPDF, @riapacheco/yutes',
  },
  {
    id: 3,
    name: 'Asset Tracker',
    spins: false,
    description: `AssetTracker is an internal equipment tracking tool that enables the manufacturing team to track all sensor and had compute technology equipment by location and MFG/M&R process`,
    toolsString: `Typescript, Angular, AWS`,
    url: `Internal solution (no url available)`
  }
];

export const PROJECTS_CLEAR_STATE: IProject[] = [
  {
    id: 1,
    name: '',
    description: '',
    url: '',
    tools: [],
    cover_image: '',
    toolsString: '',
    spins: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projectSectionTitle$ = new BehaviorSubject<string>('Projects');
  public projectSectionTitle$: Observable<string> = this._projectSectionTitle$.asObservable();

  private _projects$ = new BehaviorSubject<IProject[]>(PROJECTS_INIT_STATE);
  public projects$: Observable<IProject[]> = this._projects$.asObservable();
  private projects!: IProject[];

  constructor() { }

  /* ----------------------------------- GET ---------------------------------- */
  public getProjects() {
    return this.projects$;
  }
  /* --------------------------------- CREATE --------------------------------- */
  public addProjects(projects: IProject[]) {
    this.projects = projects;
    this._projects$.next(projects);
    return this.projects$;
  }
  public addProject(project: IProject) {
    this.projects.push(project);
    this._projects$.next(this.projects);
    return this.projects$;
  }
  public updateProjects(projects: IProject[]) {
    this.projects = projects;
    this._projects$.next(projects);
    return this.projects$;
  }

  /* --------------------------------- UPDATE --------------------------------- */
  public updateProject(project: IProject) {
    const projectList = this.projects.filter((proj: IProject) => proj.name !== project.name);
    this.projects = projectList;
    this.projects.push(project);
    this._projects$.next(this.projects);
    return this.projects$;
  }
  

  /* --------------------------------- DELETE --------------------------------- */
  public deleteProject(projectName: string) {
    const projectsList = this.projects.filter((proj: IProject) => proj.name !== projectName);
    this.projects = projectsList;
    this._projects$.next(this.projects);
    return this.projects$;
  }
  public removeProject(projectId: number, projects: IProject[]) {
    this.projects = projects;
    const projectsList = this.projects.filter((proj: IProject) => proj.id !== projectId);
    this.projects = projectsList;
    this._projects$.next(this.projects);
    return this.projects$;
  }



  public onClearProjects() {
    this.projects = PROJECTS_CLEAR_STATE;
    this._projects$.next(PROJECTS_CLEAR_STATE);
  }
}
