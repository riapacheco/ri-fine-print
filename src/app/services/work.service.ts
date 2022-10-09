import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IWork } from '../interfaces/work.interface';

export const WORK_INIT_STATE: IWork[] = [
  {
    company: 'Cold Bore Technology',
    job_title: 'Sr. Technical TPM',
    start_date: new Date(2021, 10),
    end_date: new Date(2022, 9),
    duties: [
      'Owned and executed full enterprise product portfolio re-launch, re-positioning flagship offering (SmartPAD) to include all sensor-to-cloud capabilities for immediate customer & market understanding',
      'Strategically introduced under-utilized data products in branded product line (ColdEDGE Web Services)',
      'Led product, market, and competitor research resulting in roadmap and sales enablement insights',
      'Created product marketing relational database'
    ],
    url: 'https://ria-run-site.carrd.co/#cold-bore-technology'
  }
]

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

  /* --------------------------------- DELETE --------------------------------- */
  

}
