import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISummary } from '../interfaces/summary.interface';

export const SUMMARY_INIT_STATE: ISummary = {
  first_name: 'Ria',
  last_name: 'Pacheco',
  summary_objective: 'Chase that paper',
  email: 'me@riapacheco.com',
  phone: '555 1234',
  location: 'Calgary, Alberta',
  url: 'https://ria.run',
  alt_url: 'https://riapacheco.codes',
  twitter_handle: 'realriapacheco',
  linkedin_handle: 'riapacheco',
  github_handle: 'riapacheco'
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
}
