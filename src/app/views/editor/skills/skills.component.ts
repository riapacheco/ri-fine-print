import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISkillTool } from 'src/app/interfaces/skills-tools.interface';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, OnDestroy {
  skills!: ISkillTool[];
  button = { primary: 'Add Skill', primaryIcon: 'add' }
  showsSpinner = false;
  private sub = new Subscription();
  constructor(
    public ss: SkillService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  loadData() {
    this.sub.add(this.ss.getSkills().subscribe((skills: ISkillTool[]) => {
      this.skills = skills;
    }))
  }

  onAddSkill() {
    let lastId = this.skills.length + 1;
    const newSkill: ISkillTool = {
      id: lastId++,
      name: '',
      description: ''
    }
    this.skills.push(newSkill);
  }
  onRemoveSkill(skillId: number) {
    this.ss.onRemoveSkill(skillId, this.skills);
  }

  onUpdate() {
    this.ss.updateSkills(this.skills);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 320);
  }
}
