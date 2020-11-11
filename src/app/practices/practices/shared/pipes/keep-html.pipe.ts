import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})

export class SanitizeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    transform(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
