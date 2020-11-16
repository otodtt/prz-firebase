import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
  templateUrl: './leafy.component.html',
  styleUrls: ['../../pages.scss', '../../media.scss']
})
export class LeafyComponent implements OnInit {
    private title = 'ДРЗП - Листни зеленчуци';
    private description =   'Добра Растителнозащитна Пракатика при моркови, магданоз, копър, целина. ' +
                            'Добра Растителнозащитна Пракатика при листни зеленчуци. ' +
                            'Борба с болести, неприятели и плевели при моркови, магданоз, копър, целина.';
    private keywords = 'моркови, магданоз, копър, целина, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Листни';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('leafy').valueChanges();
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
