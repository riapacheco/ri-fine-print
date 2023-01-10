import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  pdfFileName = '';

  // Preview
  @Input() previewClass!: string[]; // removes outline and things
  uriString!: string;
  page: number = 1;
  totalPages!: number;
  isLoaded = false;
  @Input() isPrinting = false; // shows controls or not
  @Input() inPreview = false; // for the draggable preview component (parent)


  hasWatermark = true;
  // Guides
  mainFontSize = 1.1;

  marginInches = 0.25;
  topMargin = 0.25;
  marginHighlight = false;

  contactInfoWidth = 65;
  contactInfoHighlight = false;
  listBlockSpace = 4;

  sectionSpacing = 0;
  sectionSpacingHighlight = false;

  summaryContentWidth = 75;
  summaryContentHighlight = false;

  projectDetailsWidth = 75;
  projectDetailsHighlight = false;
  projectVerticalSpacing = 0.45;
  projectVerticalHighlight = false;

  expDetailsWidth = 80;
  expDetailsHighlight = false;
  expVerticalSpacing = 0;

  skillBlockWidth = 30;
  skillBlockHighlight = false;
  skillBlockVerticalSpacing = 1;

  pageBreakSpace = {
    contactInfo: {
      label: 'Contact Information',
      selected: false,
      afterBreakHeight: 0,
    },
    objective: {
      label: 'Objective',
      selected: false,
      afterBreakHeight: 0,
    },
    projects: {
      label: 'Projects',
      selected: false,
      afterBreakHeight: 0,
    },
    workExperience: {
      label: 'Work Experience',
      selected: false,
      afterBreakHeight: 0,
    },
    skills: {
      label: 'Hard & Soft Skills',
      selected: false,
      afterBreakHeight: 0
    }
  }

  @ViewChild('sectionSelector') sectionSelector!: ElementRef;
  constructor(
    public res: ResumeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getView();
    this.getData();
    this.pdfFileName = `${this.summary.first_name}-${this.summary.last_name}_resume.pdf`;
  }
  ngAfterViewInit() {

  }

  getView() {
    if (this.inPreview) {
      this.previewClass = ['print-preview', 'print-ready', 'in-preview'];
      this.isPrinting = true;
    } else if (!this.inPreview && !this.isPrinting) {
      this.previewClass = ['print-preview'];
    } else {
      this.previewClass = ['print-preview', 'print-ready'];
    }
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

  private deselectAllOptions() {
    this.pageBreakSpace.contactInfo.selected = false;
    this.pageBreakSpace.objective.selected = false;
    this.pageBreakSpace.projects.selected = false;
    this.pageBreakSpace.workExperience.selected = false;
    this.pageBreakSpace.skills.selected = false;
  }

  onSectionSelect() {
    const section = this.sectionSelector.nativeElement.value;
    switch (section) {
      case 'contactInfo':
        this.deselectAllOptions();
        this.pageBreakSpace.contactInfo.selected = true;
        break;
      case 'objective':
        this.deselectAllOptions();
        this.pageBreakSpace.objective.selected = true;
        break;
      case 'projects':
        this.deselectAllOptions();
        this.pageBreakSpace.projects.selected = true;
        break;
      case 'workExperience':
        this.deselectAllOptions();
        this.pageBreakSpace.workExperience.selected = true;
        break;
      case 'skills':
        this.deselectAllOptions();
        this.pageBreakSpace.skills.selected = true;
        break;
      default:
        this.deselectAllOptions();
    }
  }
  onPrint() {
    this.startPrint();
    let data: any = document.getElementById('docData');
    setTimeout(() => {
      html2canvas(data, { scale: 2 }).then((canvas) => {
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

        if (!this.pdfFileName) {
          doc.save(`${this.summary.first_name}-${this.summary.last_name}_resume.pdf`);
        } else {
          doc.save(`${this.pdfFileName}.pdf`);
        }
        this.endPrint();
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
