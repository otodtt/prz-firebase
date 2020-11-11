import { Component, OnInit, ViewChild, ElementRef, HostListener, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { SeoService } from '../../../../../common/services/SeoService';
import { ChangeBreadcrumbService } from '../../../../../common/services/changeBreadcrumb.service';

import { DialogComponent } from '../../../shared/dialog/dialog.component';


@Component({
  templateUrl: './triticum.component.html',
  styleUrls: ['../../pages.scss']
})
export class TriticumComponent implements OnInit {
  private title = 'ДРЗП - Пшеница';
  private description = 'Добра Растителнозащитна Пракатика при пшеница. Борба с болести, неприятели и плевели при пшеницата.';
  private keywords = 'пшеница, болести, неприятели, плевели, ПРЗ, ПИВ';

  breadcrumbName = 'Пшеница';

  practices: Observable<any[]>;

  @ViewChild('structure') public structure: ElementRef;

  @HostListener('click', ['$event'])
  onClick($event: MouseEvent): void{
    const el = $event.target as HTMLInputElement;
    if (el.getAttribute('target') === '#table_bbch') {
      this.doScroll();
    }
  }

  constructor(
    private seoService: SeoService,
    private changeBreadcrumbService: ChangeBreadcrumbService,
    public dialog: MatDialog,
    db: AngularFireDatabase
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setMeta(this.description, this.keywords);
    this.practices = db.list(`triticum`).valueChanges();
  }

  ngOnInit(): void {
    this.changeBreadcrumbService.emitName(this.breadcrumbName);
  }

  openDialog(table: string): void {
    this.dialog.open(DialogComponent, {
      data: { table}
    });
  }

  doScroll(): void {
    this.structure.nativeElement.scrollIntoView();
  }
}
