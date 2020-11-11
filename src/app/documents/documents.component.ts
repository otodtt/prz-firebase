import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';

@Component({
    selector: 'prz-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
    headerId = 'aa-documents';
    breadcrumbTitle = 'ДОКУМЕНТИ';
    breadcrumbName = 'Документи';

    constructor( private changeBreadcrumb: ChangeBreadcrumbService ) { }

    ngOnInit(): void {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }

}
