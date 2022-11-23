import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QUILL } from 'src/app/constants/quill.constants';
import { IWork } from 'src/app/interfaces/work.interface';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-work-xp',
  templateUrl: './work-xp.component.html',
  styleUrls: ['./work-xp.component.scss']
})
export class WorkXpComponent implements OnInit {

  works!: IWork[];
  @ViewChild('bottom') bottomDiv!: ElementRef;
  button = { primary: 'Add Work', primaryIcon: 'add'}
  showsSpinner = false;
  modules = QUILL.MODULES_BULLETS;
  style = QUILL.STYLE;

  constructor(
    public resume: ResumeService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  private scrollToBottom() {
    setTimeout(() => { this.bottomDiv.nativeElement.scrollIntoView({ behavior: 'smooth'}); }, 400);
  }

  loadData() {
    const works = this.resume.getExperience();
    this.works = works;
  }

  onAddWork() {
    let workId = this.works.length + 1;
    let newWork = {
      id: workId++,
      company: '',
      job_title: '',
      duties: '',
      dutiesString: ''
    };
    this.works.push(newWork);
    this.resume.updateExperience(this.works);
    this.scrollToBottom();
  }

  onRemoveWork(workId: number | undefined){
    if (workId) {
      const works = this.resume.deleteExperience(workId, this.works);
      this.works = works;
    }
  }

  onUpdate() {
    this.resume.updateExperience(this.works);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 320);
  }

  onClearAll() {
    const works = this.resume.clearExperiences();
    this.works = works;
  }
}
