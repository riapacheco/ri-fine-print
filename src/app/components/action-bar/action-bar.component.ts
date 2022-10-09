import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() title = 'Summary';
  @Input() button = {
    primary: '',
    primaryIcon: 'add',
    secondary: '',
    secondaryIcon: 'add'
  };
  @Output() primaryClick = new EventEmitter<any>();
  @Output() secondaryClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onPrimaryClick(value: any) {
    this.primaryClick.emit(value);
  }

  onSecondaryClick(value: any) {
    this.secondaryClick.emit(value);
  }
}
