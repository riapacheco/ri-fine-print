import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ISkillTool } from 'src/app/interfaces/skills-tools.interface';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills!: ISkillTool[];
  button = { primary: 'Add Skill', primaryIcon: 'add' }

  @ViewChild('bottomScroll') bottomScroll!: ElementRef;

  showsSpinner = false;

  constructor(
    public resume: ResumeService,
  ) { }

  ngOnInit(): void {
    this.skills = this.resume.getSkills();
  }

  private scrollToBottom() {
    setTimeout(() => {
      this.bottomScroll.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }, 250);
  }

  onAddSkill() {
    let skillsId = this.skills.length + 1;
    let newSkill = {
      id: skillsId++,
      name: '',
      description: '',
      details: ['']
    };
    this.skills.push(newSkill);
    this.resume.updateSkills(this.skills);
    this.scrollToBottom();
  }

  onRemoveSkill(skillId: number | undefined) {
    if (skillId) {
      const skills = this.resume.deleteSkill(skillId, this.skills);
      this.skills = skills;
    }
    this.scrollToBottom();
  }

  onUpdate() {
    this.resume.updateSkills(this.skills);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 320);
  }

  onClearAll() {
    const skills = this.resume.clearSkills();
    this.skills = skills;
  }
}
