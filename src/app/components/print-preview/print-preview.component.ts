import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PrintPreviewService } from 'src/app/services/print-preview.service';


@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss']
})
export class PrintPreviewComponent implements OnInit, OnDestroy {
  /* ------------------------------ PREVIEW PROPS ----------------------------- */
  page: number = 1;
  scale = 0.75;
  transform = `scale(${this.scale})`;
  totalPages!: number;
  showsControls = false;
  isLoaded = false;
  previewStyle = ` 
    background-color: black; 
    border: 1px solid black;
    `;


  private sub = new Subscription();
  constructor(
    public printPrev: PrintPreviewService,
  ) { }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  /* --------------------------------- PREVIEW -------------------------------- */
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    if (this.totalPages > 1) { this.showsControls = true; }
    else { this.showsControls = false; }
    this.isLoaded = true;
  }
  nextPage() { this.page++; }
  prevPage() { this.page--; }


  onSizeIncrease(e: any) {
    console.log(e);
    this.scale = 0.8;
  }
  onSizeDecrease() {
    this.scale--;
  }

}
