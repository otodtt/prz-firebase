import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './cabbage.component.html',
    styleUrls: ['../../pages.scss']
})
export class CabbageComponent implements OnInit {

    private title = 'ДРЗП - Зелеви култури';
    private description =   'Добра Растителнозащитна Пракатика при главесто зеле, карфиол, алабаш, ряпа. ' +
                            'Добра Растителнозащитна Пракатика при зелеви култури. ' +
                            ' Борба с болести, неприятели и плевели при главесто зеле, карфиол, алабаш, ряпа.';
    private keywords = 'главесто зеле, карфиол, алабаш, ряпа, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Зелеви';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('cabbage').valueChanges();
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
