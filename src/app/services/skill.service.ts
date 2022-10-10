import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISkillTool } from '../interfaces/skills-tools.interface';

export const SKILL_INIT_STATE: ISkillTool[] = [
  {
    id: 1,
    name: 'Being awesome',
    description: 'sometimes I am awesome sometimes i am not',
  }
];

export const SKILL_CLEAR_STATE: ISkillTool[] = [
  {
    id: 1,
    name: '',
    description: '',
    details: ['']
  }
];

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private _skills$ = new BehaviorSubject<ISkillTool[]>(SKILL_INIT_STATE);
  public skills$: Observable<ISkillTool[]> = this._skills$.asObservable();

  private _skillSectionHeading$ = new BehaviorSubject<string>('Skills & Tools');
  public skillSectionHeading$: Observable<string> = this._skillSectionHeading$.asObservable();

  private skills!: ISkillTool[];

  constructor() { }

  /* ----------------------------------- GET ---------------------------------- */
  public getSkills() {
    return this.skills$;
  }
  /* --------------------------------- CREATE --------------------------------- */
  public addSkills(skills: ISkillTool[]) {
    this.skills = skills;
    this._skills$.next(skills);
    return this.skills$;
  }
  public addSkill(skill: ISkillTool) {
    this.skills.push(skill);
    this._skills$.next(this.skills);
    return this.skills$;
  }
  /* --------------------------------- UPDATE --------------------------------- */
  public updateSkill(skill: ISkillTool) {
    const skillList = this.skills.filter((sk: ISkillTool) => sk.name !== skill.name);
    this.skills = skillList;
    this.skills.push(skill);
    this._skills$.next(this.skills);
    return this.skills$;
  }
  public updateSkills(skills: ISkillTool[]) {
    this.skills = skills;
    this._skills$.next(skills);
    return this.skills$;
  }

  /* --------------------------------- DELETE --------------------------------- */
  public deleteSkill(skill: ISkillTool) {
    const skillList = this.skills.filter((sk: ISkillTool) => sk.name !== skill.name);
    this.skills = skillList;
    this._skills$.next(this.skills);
    return this.skills$;
  }

  onRemoveSkill(skillId: number, skills: ISkillTool[]) {
    this.skills = skills;
    const skillList = this.skills.filter((skill: ISkillTool) => skill.id !== skillId);
    this.skills = skillList;
    this._skills$.next(this.skills);
    return this.skills$;
  }

  onClearAll() {
    this.skills = []
    this._skills$.next(SKILL_CLEAR_STATE);
  }

}
