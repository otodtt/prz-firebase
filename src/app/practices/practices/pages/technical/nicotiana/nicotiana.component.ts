import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './nicotiana.component.html',
    styleUrls: ['../../pages.scss']
})
export class NicotianaComponent implements OnInit {
    private title = 'ДРЗП - Тютюн';
    private description = 'Добра Растителнозащитна Пракатика при тютюн. Борба с болести, неприятели и плевели при тютюн.';
    private keywords = 'тютюн, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Тютюн';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('nicotiana').valueChanges();
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

