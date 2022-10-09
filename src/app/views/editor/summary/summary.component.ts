import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { QUILL } from 'src/app/constants/quill.constants';
import { ISummary } from 'src/app/interfaces/summary.interface';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, AfterViewInit, OnDestroy {
  viewTitle = '';
  summary!: ISummary;

  /* ------------------------------ FIELD STYLES ------------------------------ */
  inputFocus!: boolean;
  modules = QUILL.MODULES;
  style = QUILL.STYLE;

  @ViewChild('firstField') firstField!: ElementRef;
  private sub = new Subscription();
  constructor(
    public ss: SummaryService
  ) { }

  ngOnInit(): void {
    this.initSummary()
  }

  ngAfterViewInit() {
    this.firstField.nativeElement.focus();
  }

  ngOnDestroy() { this.sub.unsubscribe(); }

  initSummary() {
    this.sub.add(this.ss.getSummary().subscribe((res: ISummary) => {
      this.summary = res;
    }));
    this.sub.add(this.ss.getHeading().subscribe((heading: string) => {
      this.viewTitle = heading;
    }));
  }
}
