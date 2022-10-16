import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type TScaleType = 'scale(0.7)' | 'scale(0.8)' | 'scale(0.9)' | 'scale(1)';

@Injectable({
  providedIn: 'root'
})
export class PrintPreviewService {
  private _showsPreview$ = new BehaviorSubject<boolean>(false);
  public showsPreview$: Observable<boolean> = this._showsPreview$.asObservable();

  private _sizeScale$ = new BehaviorSubject<TScaleType>('scale(0.7)');
  public sizeScale$: Observable<TScaleType> = this._sizeScale$.asObservable();
  sizeScale!: TScaleType;

  constructor(
  ) { }

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
}
