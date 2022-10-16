import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GeneratePdfService } from 'src/app/services/generate-pdf.service';
import { ProjectService } from 'src/app/services/project.service';
import { SummaryService } from 'src/app/services/summary.service';
import { WorkService } from 'src/app/services/work.service';
import { NgxCaptureService } from 'ngx-capture';
import { map } from 'rxjs';

const jsPDF = require('jspdf');
const html2canvas = require('html2canvas');

// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

// https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
// https://stackoverflow.com/questions/57240645/jspdf-and-html2canvas-with-angular

/**
 * DOC
 * the data for the document
 */
@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html', 
  styleUrls: ['./doc.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocComponent implements OnInit {

  @Input() config = {
    margins: '25px',
    minHeight: '11in',
    width: '8.5in',
    sectionSpacingPx: 20
  };

  docOptions = {
    background:'white',
    scale: 3
  };

  stylesheet = 'https://drive.google.com/file/d/1nhKxUFB5mNN036OrqlkpYDWaoTyOEg4C/view?usp=sharing'
  @ViewChild('docElement') docElement!: ElementRef;
  @ViewChild('dataDoc', { static: true}) dataDoc!: ElementRef;
  @ViewChild('screen', { static: true }) screen: any;

  dataUriString!: any;
  page: number = 1;
  constructor(
    public profile: SummaryService,
    public project: ProjectService,
    public works: WorkService,
    public pdfService: GeneratePdfService,
    public captureService: NgxCaptureService
  ) { }

  ngOnInit(): void {
    // this.onCapture();
    // this.onPrint()
  }

  afterLoadComplete(pdfData: any) {
    const totalPages = pdfData.numPages;
    const isLoaded = true;
    console.log('total pages ', totalPages, 'is loaded? ', isLoaded);
  }

  async onPreview() {
    let doc: any = document.getElementById('docData');
    await this.pdfService.getDataUri(doc);
    this.pdfService.pdf$.subscribe((data: any) => {
      console.log(data);
      this.dataUriString = data;
    })
  }

  onCanvas() {
    let doc: any = this.docElement.nativeElement;
    html2canvas(doc).then((canvas: any) => {
      let fileWidth = 90;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const fileURI = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'letter');
      let position = 0;
      pdf.addImage(fileURI, 'PNG', 0, position, fileWidth, fileHeight);
      pdf.save('newdoc.pdf');
    })
  }

  onPrint() {
    var divToPrint = document.getElementById('docData');
    var newWin = window.open('', 'Print-Window', 'width=1200, height=700');
    newWin?.document.open();
    newWin?.document.write(`<html><head><link href="${this.stylesheet}" rel="stylesheet" type="text/css"/><link href="app/assets/css/print.css" rel="stylesheet" type="text/css"/><style></style> </head><body onload="window.print()">${divToPrint?.innerHTML}</body></html>`);
    // newWin?.document.title = 'Your PDF Title';
    newWin?.document.close();
  }

  onCapture() {
    this.captureService.getImage(this.screen.nativeElement, true).pipe(map(img => {
      console.log(img);
    })).subscribe();
  }

}
