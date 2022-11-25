import { Component, Input, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() showsSidebar = true;
  constructor(
    public sidebar: SidebarService,
    public resume: ResumeService
  ) { }

  ngOnInit(): void {
  }

  onStateChange() {
    const devState = this.resume.getDevState();

    if (devState) {
      this.resume.updateState('product manager');
    } else {
      this.resume.updateState('developer');
    }
  }
}
