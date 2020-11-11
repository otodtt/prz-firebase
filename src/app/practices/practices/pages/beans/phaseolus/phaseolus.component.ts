import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './phaseolus.component.html',
    styleUrls: ['../../pages.scss']
})
export class PhaseolusComponent implements OnInit {
    private title = 'ДРЗП - Фасул';
    private description = 'Добра Растителнозащитна Пракатика при фасул. Борба с болести, неприятели и плевели при фасул.';
    private keywords = 'фасул, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Фасул';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('phaseolus').valueChanges();
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

