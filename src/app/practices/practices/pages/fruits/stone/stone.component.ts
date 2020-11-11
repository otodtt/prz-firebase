import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';

@Component({
    templateUrl: './stone.component.html',
    styleUrls: ['../../pages.scss']
})
export class StoneComponent implements OnInit {

    private title = 'ДРЗП - Костилкови овощни видове';
    private description =   'Добра Растителнозащитна Пракатика при слива, череша, вишна, праскова и кайсия. ' +
                            'Добра Растителнозащитна Пракатика при костилкови овощни видове. ' +
                            ' Борба с болести, неприятели и плевели при слива, череша, вишна, праскова и кайсия.';
    private keywords = 'слива, череша, вишна, праскова и кайсия, болести, неприятели, плевели, ПРЗ, ПИВ';

    breadcrumbName = 'Костилкови';

    practices: Observable<any[]>;

    constructor(
        private seoService: SeoService,
        private changeBreadcrumbService: ChangeBreadcrumbService,
        public dialog: MatDialog,
        db: AngularFireDatabase
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setMeta(this.description, this.keywords);
        this.practices = db.list('stone').valueChanges();
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
