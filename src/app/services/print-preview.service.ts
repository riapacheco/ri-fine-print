import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type TScaleType = 'scale(0.7)' | 'scale(0.8)' | 'scale(0.9)' | 'scale(1)';

@Injectable({
  providedIn: 'root'
})
export class PrintPreviewService {
  /* ------------------------------- DOC PREVIEW ------------------------------ */
  private _showsPreview$ = new BehaviorSubject<boolean>(false);
  public showsPreview$: Observable<boolean> = this._showsPreview$.asObservable();

  private _sizeScale$ = new BehaviorSubject<TScaleType>('scale(0.7)');
  public sizeScale$: Observable<TScaleType> = this._sizeScale$.asObservable();
  sizeScale!: TScaleType;

  /* ------------------------------ PRINT PREVIEW ----------------------------- */
  private _dataUriString$ = new BehaviorSubject<string>('');
  public dataUriString$: Observable<string> = this._dataUriString$.asObservable();
  dataUriString!: string;

  private _showsPdf$ = new BehaviorSubject<boolean>(false);
  public showsPdf$: Observable<boolean> = this._showsPdf$.asObservable();

  constructor() { }

  /* ------------------------------- DOC PREVIEW ------------------------------ */
  onShowPreview() { this._showsPreview$.next(true); }
  onHidePreview() { this._showsPreview$.next(false); }
  onBigger() {
    if (!this.sizeScale || this.sizeScale == 'scale(0.7)') { 
      this._sizeScale$.next('scale(0.8)'); 
      this.sizeScale = 'scale(0.8)';
    }
    else if (this.sizeScale == 'scale(0.8)') {
      this._sizeScale$.next('scale(0.9)');
      this.sizeScale = 'scale(0.9)';
    }
    else if (this.sizeScale == 'scale(0.9)') {
      this._sizeScale$.next('scale(1)');
      this.sizeScale = 'scale(1)';
    }
  }
  onSmaller() {
    if (!this.sizeScale || this.sizeScale == 'scale(0.7)') {
      console.log('lowest possible size');
    }
    else if (this.sizeScale == 'scale(1)') {
      this._sizeScale$.next('scale(0.9)');
      this.sizeScale = 'scale(0.9)';
    }
    else if (this.sizeScale == 'scale(0.9)') {
      this._sizeScale$.next('scale(0.8)');
      this.sizeScale = 'scale(0.8)';
    }
    else if (this.sizeScale == 'scale(0.8)') {
      this._sizeScale$.next('scale(0.7)');
      this.sizeScale = 'scale(0.7)';
    }
  }

  /* ------------------------------ PRINT PREVIEW ----------------------------- */
  storeDataUriString(uriString: string) {
    this.dataUriString = uriString;
    this._dataUriString$.next(uriString);
    return this.dataUriString;
  }

  getDataUriString(): string {
    return this.dataUriString;
  }

  showPdfViewer() {
    this._showsPdf$.next(true);
  }
  hidePdfViewer() {
    this._showsPdf$.next(false);
  }
}
