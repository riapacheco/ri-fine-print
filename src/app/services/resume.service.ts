import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  RESUME_BLANK_PROJECT,
  RESUME_BLANK_SKILL,
  RESUME_BLANK_WORK,
  RESUME_CLEAR_PROJECTS,
  RESUME_CLEAR_SKILLS,
  RESUME_CLEAR_SUMMARY,
  RESUME_CLEAR_WORK,
  RESUME_SEEDER_PROJECTS,
  RESUME_SEEDER_SKILLS,
  RESUME_SEEDER_SUMMARY,
  RESUME_SEEDER_WORK
} from '../constants/seeder.constants';
import { IProject } from '../interfaces/project.interface';
import { ISkillTool } from '../interfaces/skills-tools.interface';
import { ISummary } from '../interfaces/summary.interface';
import { IWork } from '../interfaces/work.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  /* ------------------------------ SUMMARY STORE ----------------------------- */
  private _summary$ = new BehaviorSubject<ISummary>(RESUME_SEEDER_SUMMARY);
  public summary$: Observable<ISummary> = this._summary$.asObservable();
  summary!: ISummary;

  /* ----------------------------- PROJECTS STORE ----------------------------- */
  private _projects$ = new BehaviorSubject<IProject[]>(RESUME_SEEDER_PROJECTS);
  public projects$: Observable<IProject[]> = this._projects$.asObservable();
  projects!: IProject[];

  /* -------------------------- WORK EXPERIENCE STORE ------------------------- */
  private _workExperience$ = new BehaviorSubject<IWork[]>(RESUME_SEEDER_WORK);
  public workExperience$: Observable<IWork[]> = this._workExperience$.asObservable();
  works!: IWork[];

  /* --------------------------------- SKILLS --------------------------------- */
  private _skills$ = new BehaviorSubject<ISkillTool[]>(RESUME_SEEDER_SKILLS);
  public skills$: Observable<ISkillTool[]> = this._skills$.asObservable();
  skills!: ISkillTool[];

  constructor() { }

  /* --------------------------------- GENERAL -------------------------------- */
  public loadResume() {
    this.summary = RESUME_SEEDER_SUMMARY;
    this.projects = RESUME_SEEDER_PROJECTS;
    this.works = RESUME_SEEDER_WORK;
    this.skills = RESUME_SEEDER_SKILLS;
  }

  /* --------------------------------- SUMMARY -------------------------------- */
  public getSummary(): ISummary {
    return this.summary;
  }
  public updateSummary(summaryData: ISummary) {
    this.summary = summaryData;
    this._summary$.next(summaryData);
  }
  public clearSummary() {
    this.summary = RESUME_CLEAR_SUMMARY;
    this._summary$.next(RESUME_CLEAR_SUMMARY);
    return this.summary;
  }

  /* -------------------------------- PROJECTS -------------------------------- */
  public getProjects(): IProject[] {
    return this.projects;
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
  public clearProjects() {
    this.projects = RESUME_CLEAR_PROJECTS;
    this._projects$.next(RESUME_CLEAR_PROJECTS);
    return this.projects;
  }

  /* ----------------------------- WORK EXPERIENCE ---------------------------- */
  public getExperience() { return this.works; }


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

  public clearExperiences() {
    this.works = RESUME_CLEAR_WORK;
    this._workExperience$.next(RESUME_CLEAR_WORK);
    return this.works;
  }

  /* --------------------------------- SKILLS --------------------------------- */
  public getSkills() {
    return this.skills;
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
    this.skills = RESUME_CLEAR_SKILLS;
    this._skills$.next(RESUME_CLEAR_SKILLS);
    return this.skills;
  }
}
