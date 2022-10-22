import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GeneratePdfService } from 'src/app/services/generate-pdf.service';
import { NgxCaptureService } from 'ngx-capture';
import { PrintPreviewService } from 'src/app/services/print-preview.service';
import { ResumeService } from 'src/app/services/resume.service';

const jsPDF = require('jspdf');
const html2canvas = require('html2canvas');

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html', 
  styleUrls: ['./doc.component.scss'],
})
export class DocComponent implements OnInit {

  @Input() config = {
    margins: '25px',
    minHeight: '11in',
    width: '8.5in',
    sectionSpacingPx: 15
  };

  docOptions = {
    background:'white',
    scale: 3
  };

  stylesheet = 'https://drive.google.com/file/d/1nhKxUFB5mNN036OrqlkpYDWaoTyOEg4C/view?usp=sharing'
  @ViewChild('docElement') docElement!: ElementRef;
  @ViewChild('dataDoc', { static: true}) dataDoc!: ElementRef;

  @Input() dataUriString!: any;
  @Input() page: number = 1;
  @Input() totalPages!: number;
  @Input() isLoaded = false;

  constructor(
    public resume: ResumeService,
    public pdfService: GeneratePdfService,
    public captureService: NgxCaptureService,
    public print: PrintPreviewService
  ) { }

  ngOnInit(): void {
  }

  afterLoadComplete(preview: any) {
    this.totalPages = preview.numPages;
    this.isLoaded = true;
  }

  nextPage() { this.page++; }
  lastPage() { this.page--; }

  onPrintPreview() {
    let doc: any = this.docElement.nativeElement;
    html2canvas(doc).then((canvas: any) => {
      let width = 8.5;
      let height = (canvas.head * width) / canvas.width;
      let position = 0;
      const uri = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'in', 'letter');
      
      pdf.addImage(uri, 'PNG', 0, position, width, height);
      const dataUri = pdf.output('datauristring');
      const newPdf = pdf.save('new-pdf.pdf');
      console.log(newPdf);
      this.dataUriString = dataUri;
    })
  }
}
