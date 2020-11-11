import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './fragaria.component.html',
    styleUrls: ['../../pages.scss']
})
export class FragariaComponent implements OnInit {

    private title = 'ДРЗП - Ягода';
    private description =   'Добра Растителнозащитна Пракатика при ягода. ' +
                            'Борба с болести, неприятели и плевели при ягода.';
    private keywords = 'ягода, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Ягода';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('fragaria').valueChanges();
    }

    ngOnInit(): void {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
    }

    openDialog(table: string): void {
        this.dialog.open(DialogComponent, {
            data: { table }
        });
    }
}
