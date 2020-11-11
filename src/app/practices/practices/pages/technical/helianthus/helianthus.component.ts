import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './helianthus.component.html',
    styleUrls: ['../../pages.scss']
})
export class HelianthusComponent implements OnInit {
    private title = 'ДРЗП - Слънчоглед';
    private description = 'Добра Растителнозащитна Пракатика при слънчоглед. Борба с болести, неприятели и плевели при слънчогледа.';
    private keywords = 'слънчоглед, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Слънчоглед';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('helianthus').valueChanges();
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
