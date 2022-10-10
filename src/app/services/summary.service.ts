import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISummary } from '../interfaces/summary.interface';

export const SUMMARY_INIT_STATE: ISummary = {
  first_name: 'Ria',
  last_name: 'Pacheco',
  email: 'me@riapacheco.com',
  phone: '555 1234',
  location: 'Calgary, Alberta',
  url: 'ria.run',
  alt_url: 'riapacheco.codes',
  twitter_handle: 'realriapacheco',
  linkedin_handle: 'riapacheco',
  github_handle: 'riapacheco',
  summary_objective: `<p>Ambitious and curious former Product Manager (of 8 years) turned frontend developer &amp; UX/UI designer, searching for an opportunity to complete the transition to full stack development under the mentorship of an innovative team.</p>`,
}

export const SUMMARY_CLEAR_STATE: ISummary = {
  first_name: '',
  last_name: '',
  summary_objective: '',
  email: '',
  phone: '',
  location: '',
  url: '',
  alt_url: '',
  twitter_handle: '',
  linkedin_handle: '',
  github_handle: '',
}

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private _summarySectionTitle$ = new BehaviorSubject<string>('Summary');
  public summarySectionTitle$: Observable<string> = this._summarySectionTitle$.asObservable();

  private _summary$ = new BehaviorSubject<ISummary>(SUMMARY_INIT_STATE);
  public summary$: Observable<ISummary> = this._summary$.asObservable();

  constructor() { }

  /* ----------------------------------- GET ---------------------------------- */
  public getSummary(): Observable<ISummary> {
    return this.summary$;
  }
  public getHeading(): Observable<string> {
    return this.summarySectionTitle$;
  }

  /* --------------------------------- CREATE --------------------------------- */
  public saveSummary(summaryData: ISummary) {
    this._summary$.next(summaryData);
  }

  /* --------------------------------- UPDATE --------------------------------- */
  public updateSummary(summaryData: ISummary) {
    this._summary$.next(summaryData);
  }

  /* --------------------------------- DELETE --------------------------------- */
  public deleteSummary() {
    this._summary$.next({});
  }

  /* -------------------------------- CLEAR ALL ------------------------------- */
  public onClearSummary() {
    this._summary$.next(SUMMARY_CLEAR_STATE);
  }
}
