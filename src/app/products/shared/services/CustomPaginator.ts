import { MatPaginatorIntl } from '@angular/material/paginator';

const bulgarianRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) { return `0 от ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    /** If the start index exceeds the list length, do not try and fix the end index to the end. */
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} от ${length}`;
};


export function getBulgarianPaginatorIntl(): MatPaginatorIntl {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = 'Бр. за страница:';
    paginatorIntl.nextPageLabel = 'Следваща';
    paginatorIntl.previousPageLabel = 'Предишна';
    paginatorIntl.firstPageLabel = 'Първа';
    paginatorIntl.lastPageLabel = 'Последна';
    paginatorIntl.getRangeLabel = bulgarianRangeLabel;

    return paginatorIntl;
}
