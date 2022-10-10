import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PrintPreviewService } from './services/print-preview.service';

// TODO Create toast as onboarding

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scrollStatus$!: Observable<boolean>;
  constructor(
    public printPrev: PrintPreviewService,
  ) {}

  ngOnInit(): void {
  }

}
