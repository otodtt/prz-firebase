import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './onion.component.html',
    styleUrls: ['../../pages.scss']
})
export class OnionComponent implements OnInit {
    private title = 'ДРЗП - Лукови култури';
    private description =   'Добра Растителнозащитна Пракатика при чесън, лук, праз. ' +
                            'Добра Растителнозащитна Пракатика при лукови култури. ' +
                            ' Борба с болести, неприятели и плевели при чесън, лук, праз.';
    private keywords = 'чесън, лук, праз, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Лукови';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('onion').valueChanges();
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
