import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appResizeLR]'
})
export class ResizeLRDirective {
  prevClientX = 0;
  isGrabbing = false;

  @Input() width!: number;
  @Output() widthChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  /* ------------------------------- MOUSEMOVEZ ------------------------------- */
  
  @HostListener('body:mousemove', ['$event'])
  public onMousemove(event: MouseEvent) {
    if (!this.isGrabbing) { return; }

    this.width += (event.clientX - this.prevClientX);
    this.widthChange.emit(this.width);
    this.prevClientX = event.clientX;
  }

  /* --------------------------------- MOUSEUP -------------------------------- */
  @HostListener('mouseup', ['$event'])
  public onMouseup(event: MouseEvent) { this.isGrabbing = false; }

  /* -------------------------------- MOUSEDOWN ------------------------------- */
  @HostListener('mousedown', ['$event'])
  public onMousedown(event: MouseEvent) {
    this.isGrabbing = true;
    this.prevClientX = event.clientX;
  }
}
