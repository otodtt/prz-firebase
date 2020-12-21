import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  headerId = 'aa-documents';
  breadcrumbTitle = 'ДОКУМЕНТИ';
  breadcrumbName = 'Документи';

  private title = 'ПРЗ | Документи';
  private description = 'По-важни документи, заявления, формуляри и др., свързани с работата на земеделски стопани и търговци на ПРЗ.';

  isLinear = false;

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
