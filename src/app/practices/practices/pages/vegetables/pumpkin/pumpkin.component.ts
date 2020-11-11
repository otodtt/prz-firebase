import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './pumpkin.component.html',
    styleUrls: ['../../pages.scss']
})
export class PumpkinComponent implements OnInit {

    private title = 'ДРЗП - Тиквови култури';
    private description =   'Добра Растителнозащитна Пракатика при краставици, тиквички, тикви, дини, пъпеши. ' +
                            'Добра Растителнозащитна Пракатика при тиквови култури. ' +
                            ' Борба с болести, неприятели и плевели при краставици, тиквички, тикви, дини, пъпеши.';
    private keywords = 'краставици, тиквички, тикви, дини, пъпеши, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Тиквови';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('pumpkin').valueChanges();
    }

    ngOnInit(): void {
        this.changeBreadcrumbService.emitName(this.breadcrumbName);
    }

    openDialog(table: string): void {
        this.dialog.open(DialogComponent, {
            data: { table}
        });
    }
}

