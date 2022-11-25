import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ResumeService } from 'src/app/services/resume.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  isDevState!: boolean;

  toastConfirmMessage = '';

  constructor(
    public resume: ResumeService,
    private location: Location,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  onStateToggle() {
    const devState = this.resume.getDevState();
    if (devState) {
      this.resume.updateState('product manager');
      this.isDevState = false;
    }
    else if (!devState) {
      this.resume.updateState('developer');
      this.isDevState = true;
    }

    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 500);
  }

  @HostListener('document:keydown.enter', ['$event'])
  public onKeyEnter(event: KeyboardEvent) {
    if (event) { this.onStateToggle(); }
  }

  @HostListener('document:keydown.escape', ['$event'])
  public onEscape(event: KeyboardEvent) {
    if (event) { this.goBack(); }
  }

  private confirmToast() {
    if (this.isDevState) {
      this.toast.callToast(`Successfully switched to <strong>Developer CV<strong>`);
    } else {
      this.toast.callToast(`Successfully switched to <strong>Product Manager CV</strong>`);
    }
  }
}
