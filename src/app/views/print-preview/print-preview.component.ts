import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/interfaces/project.interface';
import { ISkillTool } from 'src/app/interfaces/skills-tools.interface';
import { ISummary } from 'src/app/interfaces/summary.interface';
import { IWork } from 'src/app/interfaces/work.interface';
import { ResumeService } from 'src/app/services/resume.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

export type TStyleMode = 'preview' | 'print';

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss']
})
export class PrintPreviewComponent implements OnInit, AfterViewInit {
  summary!: ISummary;
  projects!: IProject[];
  workExperience!: IWork[];
  skills!: ISkillTool[];
  pdfDoc!: object;


  // Preview
  previewClass!: string[];
  uriString!: string;
  page: number = 1;
  totalPages!: number;
  isLoaded = false;
  isPrinting = false;

  // Guides
  marginInches = 0.15;
  topMargin = 0.15;
  marginHighlight = false;

  contactInfoWidth = 70;
  contactInfoHighlight = false;
  listBlockSpace = 4;

  sectionSpacing = 0.15;
  sectionSpacingHighlight = false;

  summaryContentWidth = 90;
  summaryContentHighlight = false;

  projectDetailsWidth = 80;
  projectDetailsHighlight = false;

  expDetailsWidth = 80;
  expDetailsHighlight = false;

  skillBlockWidth = 40;
  skillBlockHighlight = false;

  constructor(
    public res: ResumeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.previewClass = ['print-preview'];
    this.getData();
  }
  ngAfterViewInit() {
    
  }

  getData() {
    this.summary = this.res.getSummary();
    this.projects = this.res.getProjects();
    this.workExperience = this.res.getExperience();
    this.skills = this.res.getSkills();
  }

  /* --------------------------------- Preview -------------------------------- */
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }
  nextPage() { this.page++; }
  lastPage() { this.page--; }

  startPrint() {
    this.isPrinting = true;
    this.previewClass = ['print-preview', 'print-ready']; 
  }
  endPrint() {
    this.previewClass = ['print-preview'];
    this.isPrinting = false;
  }
  navigateBack() {
    this.router.navigateByUrl('editor/summary');
  }

  getPaddingTop() {
    if (this.isPrinting) {
      return this.marginInches - 0.4;
    } else {
      return this.marginInches;
    }
  }

  onPrint() {
    this.startPrint();
    let data: any = document.getElementById('docData');
    setTimeout(() => {
      html2canvas(data, {scale: 2.1 }).then((canvas) => {
        var convertedMargin = this.marginInches * 25.4;
        var imgData = canvas.toDataURL('image/png');
        var imgWidth = 210;
        var pageHeight = 297 - (this.marginInches * 2);
        var imgHeight = (canvas.height * imgWidth) / canvas.width - this.marginInches;
        var heightLeft = imgHeight;
        var doc = new jsPDF('p', 'mm', 'a4');
        var position = convertedMargin;

        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position += (heightLeft - imgHeight) - (this.marginInches * 2);
          doc.addPage();
          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        const firstName = this.summary.first_name?.toUpperCase();
        const lastName = this.summary.last_name?.toUpperCase();
        const fileName = `${firstName}${lastName}.pdf`;
        doc.save(fileName);
        this.endPrint();

        setTimeout(() => {
          this.navigateBack();
        }, 200);
      })
    }, 500);
  }
  // onPrint() {
  //   this.startPrint();
  //   let data: any = document.getElementById('docData');
  //   setTimeout(() => {
  //     html2canvas(data).then((canvas) => {
  //       let width = 215.9;
  //       let height = (canvas.height * width) / canvas.width;
  //       let heightLeft = height;
  //       let position = 0;
  //       let fileURI = canvas.toDataURL('image/png');
  //       let PDF = new jsPDF('p', 'mm', 'letter');
  //       PDF.addImage(fileURI, 'SVG', 0, position, width, height);      
  //       this.uriString = PDF.output('datauristring');
  //       while (heightLeft >= 0) {
  //         position = heightLeft - height;
  //         PDF.addPage();
  //         PDF.addImage(fileURI, 'SVG', 0, position, width, height);
  //         heightLeft -= height;
  //       }
  
  //       PDF.save(`${this.summary.first_name}_${this.summary.last_name}_resume.pdf`);
  //       this.endPrint();
  //       this.navigateBack();
  //     })
  //   }, 500)
  // }
}
