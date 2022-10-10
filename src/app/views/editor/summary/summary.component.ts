import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { QUILL } from 'src/app/constants/quill.constants';
import { ISummary } from 'src/app/interfaces/summary.interface';
import { PrintPreviewService } from 'src/app/services/print-preview.service';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit, OnDestroy {
  
  summary!: ISummary;

  /* ------------------------------- ACTION BAR ------------------------------- */
  viewTitle = '';
  button = {
    primary: '',
    primaryIcon: 'save',
  };

  /* ------------------------------ FIELD STYLES ------------------------------ */
  inputFocus!: boolean;
  modules = QUILL.MODULES;
  style = QUILL.STYLE;

  spin = {
    firstName: false,
    lastName: false,
    summaryObjective: false,
    email: false,
    phone: false,
    location: false,
    url: false,
    altUrl: false,
    twitterHandle: false,
    linkedinHandle: false,
    githubHandle: false,
  };

  @ViewChild('firstField') firstField!: ElementRef;
  private sub = new Subscription();
  constructor(
    public ss: SummaryService,
    public printPrev: PrintPreviewService
  ) { }

  ngOnInit(): void {
    this.initSummary()
  }

  ngAfterViewInit() {
    this.firstField.nativeElement.focus();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.ss.updateSummary(this.summary);
  }

  initSummary() {
    this.sub.add(this.ss.getSummary().subscribe((res: ISummary) => {
      this.summary = res;
    }));
    this.sub.add(this.ss.getHeading().subscribe((heading: string) => {
      this.viewTitle = heading;
    }));
  }

  private stopAllSpinners() {
    this.spin = {
      firstName: false,
      lastName: false,
      summaryObjective: false,
      email: false,
      phone: false,
      location: false,
      url: false,
      altUrl: false,
      twitterHandle: false,
      linkedinHandle: false,
      githubHandle: false,
    }
  }
  onUpdateSummary() {
    this.ss.updateSummary(this.summary);
    setTimeout(() => {
      this.stopAllSpinners();
    }, 300);
  }
}
