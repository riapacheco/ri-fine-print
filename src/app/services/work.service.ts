import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IWork } from '../interfaces/work.interface';

export const WORK_INIT_STATE: IWork[] = [
  {
    id: 1,
    company: 'Cold Bore Technology',
    job_title: 'Sr. Technical TPM',
    start_date: '2021-11-01',
    end_date: '2022-09-01',
    duties: '<ul> Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities for immediate customer & market understanding <ul> Strategically introduced under-utilized data products in branded product line (ColdEDGE Web Services) <ul> Led product, market, and competitor research resulting in roadmap and sales enablement insights <ul> Created product marketing relational database </li></ul>',
    url: 'https://ria-run-site.carrd.co/#cold-bore-technology',
    dutiesString: '<ul> Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities for immediate customer & market understanding <ul> Strategically introduced under-utilized data products in branded product line (ColdEDGE Web Services) <ul> Led product, market, and competitor research resulting in roadmap and sales enablement insights <ul> Created product marketing relational database </li></ul>'
  }
]
export const WORK_CLEAR_STATE: IWork[] = [
  {
    id: 1,
    company: '',
    job_title: '',
    start_date: new Date(),
    end_date: new Date(),
    duties: '',
    dutiesString: ''
  }
];

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private _works$ = new BehaviorSubject<IWork[]>(WORK_INIT_STATE);
  public works$: Observable<IWork[]> = this._works$.asObservable();
  private works!: IWork[];

  private _workSectionTitle$ = new BehaviorSubject<string>('Work Experience');
  public workSectionTitle$: Observable<string> = this._workSectionTitle$.asObservable();

  constructor() { }

  // GET
  public getWorks() {
    return this.works$;
  }

  /* --------------------------------- CREATE --------------------------------- */
  public addWork(worksData: IWork[]) {
    this.works = worksData;
    this._works$.next(worksData);
    return this.works$;
  }
  public addWorks(workData: IWork) {
    this.works.push(workData);
    this._works$.next(this.works);
    return this.works$;
  }

  /* --------------------------------- UPDATE --------------------------------- */
  public updateWork(work: IWork) {
    const workList = this.works.filter((work: IWork) => work.company !== work.company);
    this.works = workList;
    this.works.push(work);
    this._works$.next(this.works);
    return this.works$;
  }
  public updateWorks(works: IWork[]) {
    this.works = works;
    this._works$.next(this.works);
    return this.works$;
  }

  /* --------------------------------- DELETE --------------------------------- */
  onRemoveWork(workId: number, works: IWork[]) {
    this.works = works;
    const workList = this.works.filter((work: IWork) => work.id !== workId);
    this.works = workList;
    this._works$.next(this.works);
    return this.works$;
  }
  onClear() {
    this._works$.next(WORK_CLEAR_STATE);
  }

}
