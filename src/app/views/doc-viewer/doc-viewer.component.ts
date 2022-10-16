import { Component, HostListener, OnInit } from '@angular/core';
import { PrintPreviewService } from 'src/app/services/print-preview.service';
/**
 * DOC VIEWER
 * The document that can be dragged
 */
@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {
  resize: number = 100;
  isPrinting = false;
  testThing = 'bleh';

  constructor(
    public print: PrintPreviewService
  ) { }

  ngOnInit(): void {
  }

  onPrint() {
    this.isPrinting = true;
    setTimeout(() => {
      window.print()
    }, 600)
  }
}
