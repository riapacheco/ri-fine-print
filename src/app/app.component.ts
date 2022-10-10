import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BREAKPOINT_VALUE } from './enums/breakpoints.enums';
import { PrintPreviewService } from './services/print-preview.service';

// TODO Create toast as onboarding

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  scrollStatus$!: Observable<boolean>;
  isMobile!: boolean;
  private sub = new Subscription();
  constructor(
    public printPrev: PrintPreviewService,
    private observer: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkDevice();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  checkDevice() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.isMobile = true;
        this.router.navigateByUrl('status')
      }
      else {
        this.isMobile = false;
        this.router.navigateByUrl('editor/summary')
      }
    }))
  }
}
