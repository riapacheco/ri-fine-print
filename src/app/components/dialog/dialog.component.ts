import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ResumeService } from 'src/app/services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public resume: ResumeService,
    private location: Location,
    private router: Router
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
    }
    if (!devState) {
      this.resume.updateState('developer');
    }

    this.router.navigateByUrl('');
  }
}
