import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { MaterialModule } from './material/material.module';
import { SanitizeHtmlPipe } from '../practices/practices/shared/pipes/keep-html.pipe';

import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
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
