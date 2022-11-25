import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { slideTD } from './constants/animations.constants';
import { BREAKPOINT_VALUE } from './enums/breakpoints.enums';
import { PrintPreviewService } from './services/print-preview.service';
import { ResumeService } from './services/resume.service';
import { ToastService } from './services/toast.service';

// TODO Create toast as onboarding

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideTD ]
})
export class AppComponent implements OnInit, OnDestroy {
  scrollStatus$!: Observable<boolean>;
  isMobile!: boolean;
  isPrinting = false;
  @ViewChild('topScroll') topScroll!: ElementRef;
  private sub = new Subscription();
  constructor(
    public resume: ResumeService,
    public printPrev: PrintPreviewService,
    private observer: BreakpointObserver,
    public router: Router,
    public toast: ToastService
  ) {}

  ngOnInit(): void {
    this.checkDevice();
    this.checkState();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onRouteActivation() {
    setTimeout(() => {
      this.topScroll.nativeElement.scrollIntoView();
    }, 120);
  }

  checkDevice() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
      }
      else {
        this.isMobile = false;
      }
    }))
  }

  checkState() {
    const devState = this.resume.getDevState();

    if (devState == undefined) {
      this.resume.seedState();
    }
  }
}
