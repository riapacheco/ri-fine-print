import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
const jsPDF = require('jspdf');
const html2canvas = require('html2canvas');


@Injectable({
  providedIn: 'root'
})
export class GeneratePdfService {
  private _pdf$ = new BehaviorSubject<string>('');
  public pdf$: Observable<string> = this._pdf$.asObservable();

  constructor() { }

  async getDataUri(data: ElementRef): Promise<any> {
    await html2canvas(data).then((canvas: any) => {
      let fileWidth = 100;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let pdf =  new jsPDF('p', 'mm', 'letter');
      let position = 0;
      pdf.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      const dataUri = pdf.output('datauristring');
      this._pdf$.next(dataUri);
      return this.pdf$;
    })
  }
}
