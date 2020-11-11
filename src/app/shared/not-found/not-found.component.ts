import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  headerId = 'aa-formulations';

  private title = 'ПРЗ | 404';
  private description = 'Страница 404. Страницата не е намерена';

  breadcrumbName = '404';

  constructor(
      private changeBreadcrumb: ChangeBreadcrumbService,
      private seoService: SeoService,
  ) {
      this.seoService.addTitle(this.title);
      this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit(): void {
      this.changeBreadcrumb.emitName(this.breadcrumbName);
      this.changeBreadcrumb.emitId(this.headerId);
  }
}
