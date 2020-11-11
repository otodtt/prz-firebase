import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';

@Component({
  templateUrl: './registers.component.html',
})
export class RegistersComponent implements OnInit {

  headerId = 'aa-registers';
  breadcrumbTitle = 'РЕГИСТРИ';

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
  ) {}

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitId(this.headerId);
  }
}
