import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PrintPreviewService, TScaleType } from 'src/app/services/print-preview.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit, OnDestroy {
  @Input() title = 'Summary';
  @Input() showsSpinner = false;
  @Input() button = {
    primary: '',
    primaryIcon: 'add'
  };
  @Output() primaryClick = new EventEmitter<any>();
  @Output() secondaryClick = new EventEmitter<any>();


  private sub = new Subscription();
  constructor(
    public printPrev: PrintPreviewService,
    public toast: ToastService,
    public router: Router
  ) { }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onPrimaryClick(value: any) {
    this.primaryClick.emit(value);
  }

  onSecondaryClick(value: any) {
    this.secondaryClick.emit(value);
  }

  onPrintClick(e: any) {
    if (e) {
      this.toast.callToast('Feature coming soon!');
      setTimeout(() => {
        this.toast.dismissToast();
      }, 2500);
    }
  }

  // onPrintClick(e: any) {
  //   if (e) {
  //     this.printPrev.onHidePreview();
  //     this.router.navigateByUrl('/print-preview');
  //   }
  // }

  

}
