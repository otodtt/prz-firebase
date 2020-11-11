import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class ChangeBreadcrumbService {
    /** Observable string sources */
    private emitBreadcrumbTitle = new Subject<any>();
    private emitBreadcrumbName = new Subject<any>();
    private emitIdName = new Subject<any>();
    private removeClass = new Subject<any>();
    private closeDrawerMenu = new Subject<any>();

    /** Observable string streams */
    changeTitle$ = this.emitBreadcrumbTitle.asObservable();
    changeName$ = this.emitBreadcrumbName.asObservable();
    changeId$ = this.emitIdName.asObservable();
    changeClass$ = this.removeClass.asObservable();
    closeDrawer$ = this.closeDrawerMenu.asObservable();

    /** Service message commands */
    emitTitle(change: any): void {
        this.emitBreadcrumbTitle.next(change);
    }
    emitName(change: any): void {
        this.emitBreadcrumbName.next(change);
    }
    emitId(change: any): void {
        this.emitIdName.next(change);
    }
    emitClass(change: any): void {
        this.removeClass.next(change);
    }
    emitCloseDrawer(change: any): void {
        this.closeDrawerMenu.next(change);
    }
}
