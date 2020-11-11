import { Component, Output, EventEmitter, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

import pages from './Pages';
import { ChangeBreadcrumbService } from '../../../common/services/changeBreadcrumb.service';
import { ResizeService } from '../../../common/services/ResizeService';



import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prz-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  public pages = pages;
  public isOpenPanel = false;
  public isActiveClass = true;
  public panelCheck = 0;
  public checkPage = 0;
  public checkSPIndex = null;

  mode = false;
  openedQuery: MediaQueryList;

  private resizeSubscription: Subscription;
  private mobileQueryListener: () => void;


  public href: any;

  @Output() navClose = new EventEmitter<boolean>();

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private resizeService: ResizeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router, private activatedRoute: ActivatedRoute
  ) {
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.openedQuery = media.matchMedia('(max-width: 850px)');
    // tslint:disable-next-line: deprecation
    this.openedQuery.addListener(this.mobileQueryListener);

    const pathUrl = this.activatedRoute.snapshot.firstChild.url[0].path;

    this.pages.forEach(item => {
      if (item.link === pathUrl) {
        this.addRemoveClass(item.id);
      }
      if (item.subPage !== null) {
        item.subPage.forEach(subItem => {
          if (subItem.link === pathUrl) {
            this.openClosePanel(item.id);
            this.addRemoveClass(item.id);
            this.addClass(item.id, subItem.id);
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.changeBreadcrumb.closeDrawer$.subscribe(
      text => {
        this.onCloseSideMenu();
      }
    );
  }
  ngAfterViewInit(): void {
    this.resizeSubscription = this.resizeService.onResize$
      .subscribe(size => {
        if (size.innerWidth < 850) {
          this.mode = true;
        }
      });
  }

  onCloseSideMenu(): void {
    if (this.mode === true || this.openedQuery.matches === true) {
      this.navClose.emit(false);
    }
  }

  openClosePanel(index: number): void {
    this.panelCheck = index;
    this.isOpenPanel = !this.isOpenPanel;
    const x = document.getElementById('panel' + index);
    if (x === null) {
      this.isOpenPanel = true;
    }
  }

  addClass(index: number, spIndex: number): void {
    this.isActiveClass = true;
    this.checkPage = index;
    this.checkSPIndex = spIndex;
  }
  addRemoveClass(index: number): void {
    this.isActiveClass = true;
    this.checkPage = index;
    this.checkSPIndex = null;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.openedQuery.removeListener(this.mobileQueryListener);
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
