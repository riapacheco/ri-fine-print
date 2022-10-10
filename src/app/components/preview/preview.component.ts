import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISummary } from 'src/app/interfaces/summary.interface';
import { ProjectService } from 'src/app/services/project.service';
import { SkillService } from 'src/app/services/skill.service';
import { SummaryService } from 'src/app/services/summary.service';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {
  @Input() scale = 1;
  @Input() transform = `scale(${this.scale})`;
  heightInches = 11;
  widthInches = 8;

  

  private sub = new Subscription();
  constructor(
    public sumService: SummaryService,
    public proj: ProjectService,
    public work: WorkService,
    public skill: SkillService
  ) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  
}
