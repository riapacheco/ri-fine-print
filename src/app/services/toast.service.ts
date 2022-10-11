
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _showsToast$ = new BehaviorSubject<boolean>(false);
  public showsToast$: Observable<boolean> = this._showsToast$.asObservable();

  private _toastMessage$ = new BehaviorSubject<string>('');
  public toastMessage$: Observable<string> = this._toastMessage$.asObservable();

  constructor() { }

  callToast(toastMessage: string) {
    this._toastMessage$.next(toastMessage);
    this._showsToast$.next(true);
  }

  dismissToast() {
    this._showsToast$.next(false);

  }

}
