import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private _scrollToBottom$ = new BehaviorSubject<boolean>(false);
  public scrollToBottom$: Observable<boolean> = this._scrollToBottom$.asObservable();
  scrollBottom = false;
  constructor(
    
  ) { }

  scrollToBottom() {
    this.scrollBottom = true;
    this._scrollToBottom$.next(true);
    setTimeout(() => {
      this.scrollBottom = false;
      this._scrollToBottom$.next(false);
    }, 1000);
  }
  getStatus(): Observable<boolean> {
    return this.scrollToBottom$;
  }
}
