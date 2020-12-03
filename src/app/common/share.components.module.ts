import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeMaterialModule } from './material/home.material.module';
import { SanitizeHtmlPipe } from '../practices/practices/shared/pipes/keep-html.pipe';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HomeMaterialModule,
     ],
    declarations: [
        HeaderComponent,
        SanitizeHtmlPipe,
    ],
    exports: [
        HeaderComponent,
        SanitizeHtmlPipe,
    ]
})

export class ShareComponentsModule {}
