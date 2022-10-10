import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() showsSidebar = true;
  constructor(
    public sidebar: SidebarService
  ) { }

  ngOnInit(): void {
  }

}
