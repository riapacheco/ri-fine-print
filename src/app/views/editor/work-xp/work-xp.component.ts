import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { QUILL } from 'src/app/constants/quill.constants';
import { IWork } from 'src/app/interfaces/work.interface';
import { WorkService } from 'src/app/services/work.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-work-xp',
  templateUrl: './work-xp.component.html',
  styleUrls: ['./work-xp.component.scss']
})
export class WorkXpComponent implements OnInit, OnDestroy {

  works!: IWork[];

  dutiesIndex!: number;
  @ViewChild('bottom') bottomDiv!: ElementRef;
  button = { primary: 'Add Work', primaryIcon: 'add'}

  modules = QUILL.MODULES_BULLETS;
  style = QUILL.STYLE;
  
  spin = {
    company: false,
    jobTitle: false,
    startDate: false,
    endDate: false,
    duties: false,
    url: false,
  };
  private sub = new Subscription();
  constructor(
    public ws: WorkService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }
  private stopSpinners() {
    this.spin = {
      company: false,
      jobTitle: false,
      startDate: false,
      endDate: false,
      duties: false,
      url: false,
    };
  }

  loadData() {
    this.sub.add(this.ws.getWorks().subscribe((work: IWork[]) => {
      this.works = work;
    }))
  }

  public makeDutyArray(data: any) {
    console.log(data);
  }

  onAddWork() {
    const newWorkItem: IWork = {
      company: '',
      job_title: '',
      start_date: '',
      end_date: '',
      duties: '',
      url: '',
      dutiesString: ''
    }
    this.works.push(newWorkItem);
    setTimeout(() => {
      this.bottomDiv.nativeElement.scrollIntoView({ behavior: 'smooth'});
    }, 400);
  }

  onUpdate() {
    this.ws.updateWorks(this.works);
    setTimeout(() => {
      this.stopSpinners();
    }, 320);
  }

}
