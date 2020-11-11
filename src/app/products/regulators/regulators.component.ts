import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription, Observable, merge } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { of as observableOf } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

import { MoreInfoDialogComponent } from '../shared/more-info-dialog/more-info-dialog.component';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';
import { ResizeService } from '../../common/services/ResizeService';

import { AngularFireDatabase } from '@angular/fire/database';

export class TableFromDatabase {
  constructor(public db: AngularFireDatabase) { }

  getRepoIssues(): Observable<any[]> {
    return this.db.list(`products/regulators`).valueChanges();
  }
  disconnect(): void { }
}

@Component({
  templateUrl: './regulators.component.html',
  styleUrls: ['../shared/pages.scss', './regulators.component.scss']
})
export class RegulatorsComponent implements OnInit, AfterViewInit, OnDestroy {

  private title = 'ПРЗ | Растежни регулатори';
  private description = 'Растежни регулатори. Продукти за регулиране (стимулиране или задържане) на физиологичните процеси в растенията. ' +
                        'Използват се при пшеница, ечемик, зеленчуци, овощни култури и други.';
  private keywords = 'растежни регулатори, продуки, растителна, защита, култури, растителнозащитни, пракатики';

  breadcrumbName = 'Регулатори';

  mode = '';

  private link = 'products/regulators';
  bigQuery: MediaQueryList;
  mediumQuery: MediaQueryList;
  smallQuery: MediaQueryList;

  private resizeSubscription: Subscription;
  private mobileQueryListener: () => void;

  displayedColumns = ['name', 'substance', 'dose', 'category'];
  exampleDatabase: TableFromDatabase | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
    private db: AngularFireDatabase,
    public dialog: MatDialog,
    private resizeService: ResizeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setMeta(this.description, this.keywords);

    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.bigQuery = media.matchMedia('(max-width: 850px)');
    this.bigQuery.addEventListener('change', this.mobileQueryListener);

    this.mediumQuery = media.matchMedia('(max-width: 768px)');
    this.mediumQuery.addEventListener('change', this.mobileQueryListener);

    this.smallQuery = media.matchMedia('(max-width: 481px)');
    this.smallQuery.addEventListener('change', this.mobileQueryListener);

    if (
      this.bigQuery.matches === false &&
      this.mediumQuery.matches === false &&
      this.smallQuery.matches === false
    ) {
      this.mode = '60%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === false &&
      this.smallQuery.matches === false
    ) {
      this.mode = '60%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === true &&
      this.smallQuery.matches === false
    ) {
      this.mode = '80%';
    }
    if (
      this.bigQuery.matches === true &&
      this.mediumQuery.matches === true &&
      this.smallQuery.matches === true
    ) {
      this.mode = '';
    }
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.exampleDatabase = new TableFromDatabase(this.db);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase.getRepoIssues();
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => {
        if (size.innerWidth > 768) {
          this.mode = '60%';
        }
        if (size.innerWidth < 768) {
          this.mode = '80%';
        }
        if (size.innerWidth < 481) {
          this.mode = '';
        }
    });
  }

  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(name: any, info: any): void {
    const dialogRef = this.dialog.open(MoreInfoDialogComponent, {
      data: { product: name, data: info, link: this.link },
      width: this.mode
    });
  }

  ngOnDestroy(): void {
    this.bigQuery.removeEventListener('change', this.mobileQueryListener);
    this.mediumQuery.removeEventListener('change', this.mobileQueryListener);
    this.smallQuery.removeEventListener('change', this.mobileQueryListener);

    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
