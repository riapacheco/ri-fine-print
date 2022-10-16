import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrintPreviewService } from 'src/app/services/print-preview.service';

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss']
})
export class PrintPreviewComponent implements OnInit {
  config = {
    marginsPx: 25,
    heightIn: 'auto',
    widthIn: 'auto',
    sectionSpacingPx: 20
  }
  constructor(
    public print: PrintPreviewService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.print.onHidePreview();
  }

}
