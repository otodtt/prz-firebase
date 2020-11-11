import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
    templateUrl: './vitis.component.html',
    styleUrls: ['../pages.scss']
})
export class VitisComponent implements OnInit {

    private title = 'ДРЗП - Лоза';
    private description =   'Добра Растителнозащитна Пракатика при лоза. ' +
                            'Борба с болести, неприятели и плевели при лозата.';
    private keywords = 'лоза, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Лоза';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('vitis').valueChanges();
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
