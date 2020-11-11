import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../../common/services/changeBreadcrumb.service';

import pages from '../Pages';
import { MenuButtonAnimation } from './animations';

@Component({
    selector: 'prz-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    animations: [ MenuButtonAnimation ]
})
export class SideNavComponent implements AfterViewInit {
    public pages = pages;
    public subPages: any;

    public state = 'default';
    public stateSub = 'default-sub';
    public isClicked = false;
    public isActiveClass = false;
    public pageId: number;

    @Output() navClose = new EventEmitter<boolean>();
    constructor(private changeBreadcrumb: ChangeBreadcrumbService) { }

    ngAfterViewInit(): void {
        this.changeBreadcrumb.changeClass$.subscribe(
            text => {
                this.isActiveClass = text;
            }
        );
    }

    onCloseMenu(): void {
        this.navClose.emit(false);
    }

    rotate(index?): void {
        this.state = (this.state === 'default' ? 'hidden' : 'default');
        this.stateSub = (this.stateSub === 'default-sub' ? 'shown' : 'default-sub');
        this.isClicked = true;
        this.subPages = this.pages[index].subPage;
    }

    returnDefaultMenu(): void {
        this.state = (this.state === 'default' ? 'hidden' : 'default');
        this.stateSub = (this.stateSub === 'default-sub' ? 'shown' : 'default-sub');
        this.isClicked = false;
    }
    addClass(id: number): void {
        this.isActiveClass = true;
        this.pageId = id;
    }
    removeClass(): void {
        this.isActiveClass = false;
    }
}
