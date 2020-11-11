import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[przAnchorTo]' })
export class AnchorToDirective {
    @Input() target: string;

    constructor(el: ElementRef) { el.nativeElement.style.cursor = 'pointer'; }

    @HostListener('click', ['$event'])
    onClick(): void { document.querySelector(this.target).scrollIntoView(); }
}
