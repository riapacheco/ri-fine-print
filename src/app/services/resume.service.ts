import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PROJECTS_CLEARED, PROJECTS_DEVELOPER, PROJECTS_PRODUCT, SKILLS_CLEARED, SKILLS_DEVELOPER, SKILLS_PRODUCT, SUMMARY_CLEARED, SUMMARY_DEVELOPER, SUMMARY_PRODUCT, WORKS_CLEARED, WORKS_DEVELOPER, WORKS_PRODUCT } from '../constants/resume.constants';

import { IProject } from '../interfaces/project.interface';
import { ISkillTool } from '../interfaces/skills-tools.interface';
import { ISummary } from '../interfaces/summary.interface';
import { IWork } from '../interfaces/work.interface';

export type TSeedData = 'developer' | 'product manager';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  /* -------------------------------------------------------------------------- */
  /*                               DEVELOPER STATE                              */
  /* -------------------------------------------------------------------------- */
  private _devState$ = new BehaviorSubject<boolean>(true);
  public devState$: Observable<boolean> = this._devState$.asObservable();
  devState!: boolean;

  /* -------------------------------------------------------------------------- */
  /*                                   SUMMARY                                  */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------- DEVELOPER ------------------------------- */
  private _summaryDeveloper$ = new BehaviorSubject<ISummary>(SUMMARY_DEVELOPER);
  public summaryDeveloper$: Observable<ISummary> = this._summaryDeveloper$.asObservable();
  summaryDeveloper!: ISummary;
  /* ----------------------------- PRODUCT MANAGER ---------------------------- */
  private _summaryProductManager$ = new BehaviorSubject<ISummary>(SUMMARY_PRODUCT);
  public summaryProductManager$: Observable<ISummary> = this._summaryProductManager$.asObservable();
  summaryProductManager!: ISummary;

  /* -------------------------------------------------------------------------- */
  /*                                  PROJECTS                                  */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------- DEVELOPER ------------------------------- */
  private _projectsDeveloper$ = new BehaviorSubject<IProject[]>(PROJECTS_DEVELOPER);
  public projectsDeveloper$: Observable<IProject[]> = this._projectsDeveloper$.asObservable();
  projectsDeveloper!: IProject[];
  /* ----------------------------- PRODUCT MANAGER ---------------------------- */
  private _projectsProductManager$ = new BehaviorSubject<IProject[]>(PROJECTS_PRODUCT);
  public projectsProductManager$: Observable<IProject[]> = this._projectsProductManager$.asObservable();
  projectsProductManager!: IProject[];

  /* -------------------------------------------------------------------------- */
  /*                               WORK EXPERIENCE                              */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------- DEVELOPER ------------------------------- */
  private _worksDeveloper$ = new BehaviorSubject<IWork[]>(WORKS_DEVELOPER);
  public worksDeveloper$: Observable<IWork[]> = this._worksDeveloper$.asObservable();
  worksDeveloper!: IWork[];
  /* ----------------------------- PRODUCT MANAGER ---------------------------- */
  private _worksProductManager$ = new BehaviorSubject<IWork[]>(WORKS_PRODUCT);
  public worksProductManager$: Observable<IWork[]> = this._worksProductManager$.asObservable();
  worksProductManager!: IWork[];

  /* -------------------------------------------------------------------------- */
  /*                                   SKILLS                                   */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------- DEVELOPER ------------------------------- */
  private _skillsDeveloper$ = new BehaviorSubject<ISkillTool[]>(SKILLS_DEVELOPER);
  public skillsDeveloper$: Observable<ISkillTool[]> = this._skillsDeveloper$.asObservable();
  skillsDeveloper!: ISkillTool[];
  /* ----------------------------- PRODUCT MANAGER ---------------------------- */
  private _skillsProductManager$ = new BehaviorSubject<ISkillTool[]>(SKILLS_PRODUCT);
  public skillsProductManager$: Observable<ISkillTool[]> = this._skillsProductManager$.asObservable();
  skillsProductManager!: ISkillTool[];


  /* -------------------------------------------------------------------------- */
  /*                                     OLD                                    */
  /* -------------------------------------------------------------------------- */
  /* ------------------------------ SUMMARY STORE ----------------------------- */
  private _summary$ = new BehaviorSubject<ISummary>(SUMMARY_DEVELOPER);
  public summary$: Observable<ISummary> = this._summary$.asObservable();
  summary!: ISummary;

  /* ----------------------------- PROJECTS STORE ----------------------------- */
  private _projects$ = new BehaviorSubject<IProject[]>(PROJECTS_DEVELOPER);
  public projects$: Observable<IProject[]> = this._projects$.asObservable();
  projects!: IProject[];

  /* -------------------------- WORK EXPERIENCE STORE ------------------------- */
  private _workExperience$ = new BehaviorSubject<IWork[]>(WORKS_DEVELOPER);
  public workExperience$: Observable<IWork[]> = this._workExperience$.asObservable();
  works!: IWork[];

  /* --------------------------------- SKILLS --------------------------------- */
  private _skills$ = new BehaviorSubject<ISkillTool[]>(SKILLS_DEVELOPER);
  public skills$: Observable<ISkillTool[]> = this._skills$.asObservable();
  skills!: ISkillTool[];

  constructor() { }

  /* ---------------------------------- STATE --------------------------------- */
  public getDevState() {
    return this.devState;
  }

  public seedState() {
    if (!this.summaryDeveloper) {
      this.seedData('developer');
    }
    if (!this.summaryProductManager$) {
      this.seedData('product manager');
    }
  }

  public updateState(stateType: TSeedData) {
    if (stateType == 'developer') {
      this.devState = true;
      this._devState$.next(true);
    }
    if (stateType == 'product manager') {
      this.devState = false;
      this._devState$.next(false);
    }
  }

  private seedData(dataType: TSeedData) {
    this._summaryDeveloper$.next(SUMMARY_DEVELOPER);
    this.summaryDeveloper = SUMMARY_DEVELOPER;
    this._projectsDeveloper$.next(PROJECTS_DEVELOPER);
    this.projectsDeveloper = PROJECTS_DEVELOPER;
    this._worksDeveloper$.next(WORKS_DEVELOPER);
    this.worksDeveloper = WORKS_DEVELOPER;
    this._skillsDeveloper$.next(SKILLS_DEVELOPER);
    this.skillsDeveloper = SKILLS_DEVELOPER;
    this._summaryProductManager$.next(SUMMARY_PRODUCT);
    this.summaryProductManager = SUMMARY_PRODUCT;
    this._projectsProductManager$.next(PROJECTS_PRODUCT);
    this.projectsProductManager = PROJECTS_PRODUCT;
    this._worksProductManager$.next(WORKS_PRODUCT);
    this.worksProductManager = WORKS_PRODUCT;
    this._skillsProductManager$.next(SKILLS_PRODUCT);
    this.skillsProductManager = SKILLS_PRODUCT;

    if (dataType == 'developer') {
      this.updateState('developer');
    }

    if (dataType == 'product manager') {
      this.updateState('product manager');
    }
  }


  /* --------------------------------- SUMMARY -------------------------------- */
  public getSummary(): any {
    if (this.devState) { return this.summaryDeveloper; }
    else { return this.summaryProductManager; }
  }
  public updateSummary(summaryData: ISummary): ISummary {
    if (this.devState) {
      this.summaryDeveloper = summaryData;
      this._summaryDeveloper$.next(summaryData);
      return this.summaryDeveloper;
    }
    else {
      this.summaryProductManager = summaryData;
      this._summaryProductManager$.next(summaryData);
      return this.summaryProductManager;
    }
  }
  public clearSummary() {
    if (this.devState) {
      this.summaryDeveloper = SUMMARY_CLEARED;
      this._summaryDeveloper$.next(SUMMARY_CLEARED);
      return this.summaryDeveloper;
    }
    else {
      this.summaryProductManager = SUMMARY_CLEARED;
      this._summaryProductManager$.next(SUMMARY_CLEARED);
      return this.summaryProductManager;
    }
  }

  /* -------------------------------- PROJECTS -------------------------------- */
  public getProjects(): IProject[] {
    if (this.devState) { return this.projectsDeveloper; }
    else { return this.projectsProductManager; }
  }
  public updateProjects(projects: IProject[]): IProject[] {
    this.projects = projects;
    this._projects$.next(projects);
    return this.projects;
  }
  public deleteProject(projectId: number, projects: IProject[]): IProject[] {
    this.projects = projects;
    const projectsList = this.projects.filter((proj: IProject) => proj.id !== projectId);
    this.projects = projectsList;
    this._projects$.next(this.projects);
    return this.projects;
  }
  public clearProjects(): IProject[] {
    if (this.devState) {
      this.projectsDeveloper = PROJECTS_CLEARED;
      this._projectsDeveloper$.next(PROJECTS_CLEARED);
      return this.projectsDeveloper;
    }
    else {
      this.projectsProductManager = PROJECTS_CLEARED;
      this._projectsProductManager$.next(PROJECTS_CLEARED);
      return this.projectsProductManager;
    }
  }

  /* ----------------------------- WORK EXPERIENCE ---------------------------- */
  public getExperience() {
    if (this.devState) { return this.worksDeveloper; }
    else { return this.worksProductManager; }
  }

  public updateExperience(workData: IWork[]) {
    this.works = workData;
    this._workExperience$.next(workData);
    return this.works;
  }

  public deleteExperience(experienceId: number, experiences: IWork[]) {
    this.works = experiences;
    const cleanedList = this.works.filter((work: IWork) => work.id !== experienceId);
    this.works = cleanedList;
    this._workExperience$.next(this.works);
    return this.works;
  }

  public clearExperiences(): IWork[] {
    if (this.devState) {
      this.worksDeveloper = WORKS_CLEARED;
      this._worksDeveloper$.next(WORKS_CLEARED);
      return this.worksDeveloper;
    }
    else {
      this.worksProductManager = WORKS_CLEARED;
      this._worksProductManager$.next(WORKS_CLEARED);
      return this.worksProductManager;
    }
  }

  /* --------------------------------- SKILLS --------------------------------- */
  public getSkills() {
    if (this.devState) { return this.skillsDeveloper; }
    else { return this.skillsProductManager; }
  }


  public deleteSkill(skillId: number, skills: ISkillTool[]) {
    this.skills = skills;
    const skillList = this.skills.filter((skill: ISkillTool) => skill.id !== skillId);
    this.skills = skillList;
    this._skills$.next(this.skills);
    return this.skills;
  }

  public updateSkills(skills: ISkillTool[]) {
    this.skills = skills;
    this._skills$.next(skills);
    return this.skills;
  }

  public clearSkills() {
    if (this.devState) {
      this.skillsDeveloper = SKILLS_CLEARED;
      this._skillsDeveloper$.next(SKILLS_CLEARED);
      return this.skillsDeveloper;
    }

    else {
      this.skillsProductManager = SKILLS_CLEARED;
      this._skillsProductManager$.next(SKILLS_CLEARED);
      return this.skillsProductManager;
    }
  }
}
