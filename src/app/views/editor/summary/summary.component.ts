import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { QUILL } from 'src/app/constants/quill.constants';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoints.enums';
import { ISummary } from 'src/app/interfaces/summary.interface';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit, OnDestroy {
  summary!: ISummary;

  /* ------------------------------- ACTION BAR ------------------------------- */
  button = {
    primary: '',
    primaryIcon: 'save',
  };
  showsSpinner = false;

  /* ------------------------------ FIELD STYLES ------------------------------ */
  inputFocus!: boolean;
  modules = QUILL.MODULES;
  style = QUILL.STYLE;

  isMobile!: boolean;

  private sub = new Subscription();
  constructor(
    public resume: ResumeService,
    private router: Router,
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.checkDevice();
    this.summary = this.resume.getSummary();
  }

  ngAfterViewInit(): void {
    this.summary = this.resume.getSummary();
  }
  ngOnDestroy() { this.sub.unsubscribe(); this.resume.updateSummary(this.summary); }

  checkDevice() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.router.navigateByUrl('status');
      } else {
        this.router.navigateByUrl('editor/summary');
      }
    }))
  }

  onUpdateSummary() {
    this.resume.updateSummary(this.summary);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 350);
  }
  onClearAll() {
    const summary = this.resume.clearSummary();
    this.summary = summary;
  }
}
