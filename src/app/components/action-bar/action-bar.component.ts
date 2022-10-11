import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrintPreviewService } from 'src/app/services/print-preview.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() title = 'Summary';
  @Input() showsSpinner = false;
  @Input() button = {
    primary: '',
    primaryIcon: 'add'
  };
  @Output() primaryClick = new EventEmitter<any>();
  @Output() secondaryClick = new EventEmitter<any>();

  constructor(
    public printPrev: PrintPreviewService,
    public toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  onPrimaryClick(value: any) {
    this.primaryClick.emit(value);
  }

  onSecondaryClick(value: any) {
    this.secondaryClick.emit(value);
  }

  onPrintClick(e: any) {
    if (e) {
      this.toast.callToast(`This feature is on its way!`);
      setTimeout(() => {
        this.toast.dismissToast();
      }, 2500);
    }

  }
}
