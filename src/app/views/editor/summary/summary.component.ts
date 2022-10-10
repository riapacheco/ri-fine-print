import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { QUILL } from 'src/app/constants/quill.constants';
import { BREAKPOINT_VALUE } from 'src/app/enums/breakpoints.enums';
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
  showsSpinner = false;

  /* ------------------------------ FIELD STYLES ------------------------------ */
  inputFocus!: boolean;
  modules = QUILL.MODULES;
  style = QUILL.STYLE;

  isMobile!: boolean;
  @ViewChild('firstField') firstField!: ElementRef;
  private sub = new Subscription();
  constructor(
    public ss: SummaryService,
    public printPrev: PrintPreviewService,
    private router: Router,
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.checkDevice();
    this.initSummary();
  }

  ngAfterViewInit() {
    this.firstField.nativeElement.focus();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.ss.updateSummary(this.summary);
  }

  checkDevice() {
    this.sub.add(this.observer.observe([BREAKPOINT_VALUE.mobile]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[BREAKPOINT_VALUE.mobile]) {
        this.router.navigateByUrl('status');
      } else {
        this.router.navigateByUrl('editor/summary');
      }
    }))
  }

  initSummary() {
    this.sub.add(this.ss.getSummary().subscribe((res: ISummary) => {
      this.summary = res;
    }));
    this.sub.add(this.ss.getHeading().subscribe((heading: string) => {
      this.viewTitle = heading;
    }));
  }
  onUpdateSummary() {
    this.ss.updateSummary(this.summary);
    setTimeout(() => {
      this.showsSpinner = false;
    }, 350);
  }
}
