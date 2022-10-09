import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProject } from '../interfaces/project.interface';

export const PROJECTS_INIT_STATE: IProject[] = [
  {
    name: 'RiReader',
    description: 'RiReader is an application offered on Web, iOS, and Android, which enables a user to both consume and retain data they\'ve read from a physical book.',
    url: 'https://rireader.app',
    tools: [
      'TypeScript / JavaScript'
    ],
    cover_image: ''
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
    return this._projects$;
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
}
