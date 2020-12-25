import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

@Component({
  templateUrl: './legislation.component.html',
  styleUrls: ['./legislation.component.scss']
})
export class LegislationComponent implements OnInit {

  headerId = 'aa-legislation';

  breadcrumbTitle = 'ЗАКОНИ';
  breadcrumbName = 'Закони';

  private title = 'ПРЗ | Законодателство';
  private description = 'Законодателство. Списък на основни закони, наредби и нормативни ' +
                        'актове, свързани със земеделието и използването на ПРЗ в България и Европейския съюз';

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
  ) {
      this.seoService.addTitle(this.title);
      this.seoService.setNoKeywordsMeta(this.description);
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);
  }

}
