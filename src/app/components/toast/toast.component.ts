import { Component, OnInit } from '@angular/core';
import { slideTD } from 'src/app/constants/animations.constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [ slideTD ]
})
export class ToastComponent implements OnInit {

  constructor(
    public toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.toast.dismissToast();
  }

}
