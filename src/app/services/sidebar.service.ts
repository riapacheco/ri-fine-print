import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private _showsSidebar$ = new BehaviorSubject<boolean>(true);
  public showsSidebar$: Observable<boolean> = this._showsSidebar$.asObservable();

  constructor() { }
  
  onOpenSidebar() {
    this._showsSidebar$.next(true);
  }
  onCloseSidebar() {
    this._showsSidebar$.next(false);
  }
}
