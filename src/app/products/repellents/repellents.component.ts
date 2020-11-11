import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';
import { SeoService } from '../../common/services/SeoService';
import { ResizeService } from '../../common/services/ResizeService';

import { RodentsDialogComponent } from '../rodents/rodents-dialog/rodents-dialog.component';


export interface Repellent {
    name: string;
    firmName: string;
    permission: string;
    valid: string;
    substance: string;
    dose: string;
    measure: string;
    disease: string;
    period: string;
    category: string;
}
const ELEMENT_DATA: Repellent[] = [
    {
        name: 'АРБИНОЛ Б',
        firmName: 'Щелер – Германия',
        permission: 'Удостоверение № 0341-ПРЗ1/24.11.2005 г',
        valid: 'Валидно до: *',
        substance: 'битрекс /денатониум бензоат/ - 0,1 %',
        dose: '2',
        measure: 'л/дка',
        disease: 'репелент срещу сърни, зайци и елени по липа и червен дъб в доза 2 л/дка или 1-6 л. за 1000 фиданки',
        period: '-',
        category: '-'
    }
];

@Component({
    templateUrl: './repellents.component.html',
    styleUrls: ['./repellents.component.scss']
})
export class RepellentsComponent implements OnInit, AfterViewInit, OnDestroy {

    private title = 'ПРЗ | Репеленти';
    private description = 'Репелент срещу сърни, зайци и елени по липа и червен дъб';

    breadcrumbName = 'Репеленти';

    mode = '';

    bigQuery: MediaQueryList;
    mediumQuery: MediaQueryList;
    smallQuery: MediaQueryList;

    private resizeSubscription: Subscription;
    private mobileQueryListener: () => void;

    displayedColumns: string[] = ['name', 'substances', 'dose', 'disease', 'period', 'category', 'moreDetails'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(
        private changeBreadcrumb: ChangeBreadcrumbService,
        private seoService: SeoService,
        public dialog: MatDialog,
        private resizeService: ResizeService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        this.seoService.addTitle(this.title);
        this.seoService.setNoKeywordsMeta(this.description);

        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.bigQuery = media.matchMedia('(max-width: 850px)');
        // tslint:disable-next-line: deprecation
        this.bigQuery.addListener(this.mobileQueryListener);

        this.mediumQuery = media.matchMedia('(max-width: 768px)');
        // tslint:disable-next-line: deprecation
        this.mediumQuery.addListener(this.mobileQueryListener);

        this.smallQuery = media.matchMedia('(max-width: 481px)');
        // tslint:disable-next-line: deprecation
        this.smallQuery.addListener(this.mobileQueryListener);

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

    openDialog(info: any): void {
        const dialogRef = this.dialog.open(RodentsDialogComponent, {
            data: { data: info },
            width: this.mode
        });
    }

    ngOnDestroy(): void {
        // tslint:disable-next-line: deprecation
        this.bigQuery.removeListener(this.mobileQueryListener);
        // tslint:disable-next-line: deprecation
        this.mediumQuery.removeListener(this.mobileQueryListener);
        // tslint:disable-next-line: deprecation
        this.smallQuery.removeListener(this.mobileQueryListener);
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }

}
