import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { SummaryService } from './summary.service';
import { WorkService } from './work.service';
import { ProjectService } from './project.service';
import { SkillService } from './skill.service';

export const PREVIEW_SIZE = {
  originalSize: false,
  height: 516,
  width: 400
}

export const ORIGINAL_SIZE = {
  originalSize:true,
  height: 750,
  width: 800
}

@Injectable({
  providedIn: 'root'
})
export class PrintPreviewService {

  private _showsPreview$ = new BehaviorSubject<boolean>(!false);
  public showsPreview$: Observable<boolean> = this._showsPreview$.asObservable();
  
  private _previewSize$ = new BehaviorSubject<any>(PREVIEW_SIZE);
  public previewSize$: Observable<any> = this._previewSize$.asObservable();


  private _docData$ = new BehaviorSubject<any>({});
  public docData$: Observable<any> = this._docData$.asObservable();

  constructor(
    public summary: SummaryService,
    public work: WorkService,
    public project: ProjectService,
    public skill: SkillService
  ) { }

  onTrueSize() {
    this._previewSize$.next(ORIGINAL_SIZE);
  }
  onPreviewSize() {
    this._previewSize$.next(PREVIEW_SIZE);
  }

  onShowPreview() { this._showsPreview$.next(true); }
  onHidePreview() { this._showsPreview$.next(false); }

  autoSave() {
    
  }
}
