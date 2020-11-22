import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

const tableData = [
  {position: 1, symbol: 'АБ', latin: 'AB', name: '- примамка - зърна'},
  {position: 2, symbol: 'АЕ', latin: 'AE', name: '- аерозол разпръскващ'},
  {position: 3, symbol: 'АЛ', latin: 'AL', name: '- други течности'},
  {position: 4, symbol: 'АП', latin: 'AP', name: '- други прахове'},
  {position: 5, symbol: 'ББ', latin: 'BB', name: '- примамка блок'},
  {position: 6, symbol: 'ВГ', latin: 'WG', name: '- вододиспергируеми гранули = ДФ = ВДГ'},
  {position: 7, symbol: 'ВП', latin: 'VP', name: '- продукт, отделящ пари'},
  {position: 8, symbol: 'ВП', latin: 'WP', name: '- намокрим прах = НП'},
  {position: 9, symbol: 'ВС', latin: 'WS', name: '- вододиспергируем прах за третиране на семена'},
  {position: 10, symbol: 'ВТ', latin: 'WT', name: '- вододиспегируеми таблети'},
  {position: 11, symbol: 'Г', latin: 'G', name: '- гранулат'},
  {position: 12, symbol: 'ГА', latin: 'GA', name: '- газ'},
  {position: 13, symbol: 'ГБ', latin: 'GB', name: '- гранулирана примамка'},
  {position: 14, symbol: 'ГВ', latin: 'GW', name: '- водоразтворим гел'},
  {position: 15, symbol: 'ГГ', latin: 'GG', name: '- макрогранули'},
  {position: 16, symbol: 'ГЕ', latin: 'GE', name: '- продукт, отделящ газ'},
  {position: 17, symbol: 'ГЛ', latin: 'GL', name: '- емулгируем гел'},
  {position: 18, symbol: 'ГР', latin: 'GR', name: '- гранули'},
  {position: 19, symbol: 'ГС', latin: 'GS', name: '- формулация за мазане'},
  {position: 20, symbol: 'ГФ', latin: 'GF', name: '- гел за третиране на семена'},
  {position: 21, symbol: 'ДК', latin: 'DC', name: '- дисперсионен концентрат'},
  {position: 22, symbol: 'ДП', latin: 'DP', name: '- прах за прашене = ПП'},
  {position: 23, symbol: 'ДС', latin: 'DS', name: '- прах за сухо третиране на семена'},
  {position: 24, symbol: 'ДТ', latin: 'DT', name: '- таблетки за пряка употреба'},
  {position: 25, symbol: 'Е', latin: 'Е', name: '- емулсия'},
  {position: 26, symbol: 'ЕВ', latin: 'EW', name: '- емулсия, масло във вода'},
  {position: 27, symbol: 'ЕГ', latin: 'EG', name: '- емулгируеми гранули'},
  {position: 28, symbol: 'ЕД', latin: 'ED', name: '- течност с ел. зареждане'},
  {position: 29, symbol: 'ЕК', latin: 'EC', name: '- емулсионен концентрат'},
  {position: 30, symbol: 'ЕО', latin: 'EO', name: '- емулсия, вода в масло'},
  {position: 31, symbol: 'ЕС', latin: 'ES', name: '- емулсия за третиране на семена'},
  {position: 32, symbol: 'ЗК', latin: 'ZC', name: '- смесена формулация от КС (CS) и СК (SC)'},
  {position: 33, symbol: 'ЗЕ', latin: 'ZE', name: '- смесена формулация от КС (CS) и СE (SE)'},
  {position: 34, symbol: 'ЗВ', latin: 'ZW', name: '- смесена формулация от КС (CS) и ЕВ (EW)'},
  {position: 35, symbol: 'КБ', latin: 'CB', name: '- концентрирана примамка'},
  {position: 36, symbol: 'КГ', latin: 'CG', name: '- капсулирани гранули'},
  {position: 37, symbol: 'КК', latin: 'KK', name: '- комбинирана опаковка - твърдо/течно'},
  {position: 38, symbol: 'КЛ', latin: 'CL', name: '- контактна течност или гел'},
  {position: 39, symbol: 'КТ', latin: 'KL', name: '- комбинирана опаковка - течно/течно'},
  {position: 40, symbol: 'КН', latin: 'KN', name: '- концентрат, отделящ мъгла на студено'},
  {position: 41, symbol: 'КП', latin: 'CP', name: '- контактен прах'},
  {position: 42, symbol: 'КО', latin: 'KP', name: '- комбинирана опаковка - твърдо/твърдо'},
  {position: 43, symbol: 'КС', latin: 'CS', name: '- суспензия капсули'},
  {position: 44, symbol: 'КФ', latin: 'CF', name: '- капсулирана суспензия за третиране на семена'},
  {position: 45, symbol: 'Л', latin: 'L', name: '- течност'},
  {position: 46, symbol: 'ЛА', latin: 'LA', name: '- лак'},
  {position: 47, symbol: 'ЛВ', latin: 'LW', name: '- формулация за малообемно третиране'},
  {position: 48, symbol: 'ЛС', latin: 'LS', name: '- разтвор за третиране на семена'},
  {position: 49, symbol: 'МГ', latin: 'MG', name: '- микрогранули'},
  {position: 50, symbol: 'МЕ', latin: 'ME', name: '- микроемулсия'},
  {position: 51, symbol: 'ОД', latin: 'ОD', name: '- маслена дисперсия'},
  {position: 52, symbol: 'ОЛ', latin: 'OL', name: '- течност, смесима с масло'},
  {position: 53, symbol: 'ОП', latin: 'OP', name: '- прах, диспергируем в масло'},
  {position: 54, symbol: 'ОФ', latin: 'OF', name: '- концентрирана суспензия, разтворима в масло'},
  {position: 55, symbol: 'ПА', latin: 'PA', name: '- паста'},
  {position: 56, symbol: 'ПБ', latin: 'PB', name: '- примамка на плочки'},
  {position: 57, symbol: 'ПК', latin: 'PC', name: '- концентрат гел или паста'},
  {position: 58, symbol: 'ПС', latin: 'PS', name: '- семена, покрити с пестицид'},
  {position: 59, symbol: 'РБ', latin: 'RB', name: '- примамка, готова за употреба'},
  {position: 60, symbol: 'СБ', latin: 'SB', name: '- примамка на парчета'},
  {position: 61, symbol: 'СВ', latin: 'CV', name: '- концентрат за приготвяне на примамки'},
  {position: 62, symbol: 'СГ', latin: 'SG', name: '- гранули, разтворими във вода'},
  {position: 63, symbol: 'СД', latin: 'SD', name: '- суспензионен концентрат за директна употреба'},
  {position: 64, symbol: 'СЕ', latin: 'SE', name: '- суспо-емулсия'},
  {position: 65, symbol: 'СК', latin: 'SC', name: '- суспензионен концентрат = Ф = ФЛ = ФЛО'},
  {position: 66, symbol: 'СЛ', latin: 'SL', name: '- разтворим концентрат = РК'},
  {position: 67, symbol: 'СП', latin: 'SP', name: '- прах, разтворим във вода = РП'},
  {position: 68, symbol: 'СС', latin: 'SS', name: '- водоразтворим прах за третиране на семена'},
  {position: 69, symbol: 'СТ', latin: 'ST', name: '- водоразтворими таблети'},
  {position: 70, symbol: 'СУ/УЛВ', latin: 'SU/ULV', name: '- суспензия за ултрамалообемно третиране'},
  {position: 71, symbol: 'ТБ', latin: 'TB', name: '- таблетки'},
  {position: 72, symbol: 'ТК', latin: 'TC', name: '- технически материал'},
  {position: 73, symbol: 'ТК', latin: 'TK', name: '- технически концентрат'},
  {position: 74, symbol: 'УЛ/УЛВ', latin: 'UL/ULV', name: '- течност за ултра малообемно третиране'},
  {position: 75, symbol: 'ФВ', latin: 'FW', name: '- пелети за фумигация'},
  {position: 76, symbol: 'ФГ', latin: 'FG', name: '- фини гранули'},
  {position: 77, symbol: 'ФД', latin: 'FD', name: '- кутия за обгазяване, димка'},
  {position: 78, symbol: 'ФК', latin: 'FK', name: '- свещи за фумигация'},
  {position: 79, symbol: 'ФП', latin: 'FP', name: '- патрон за фумигация'},
  {position: 80, symbol: 'ФР', latin: 'FR', name: '- пръчици за фумигация'},
  {position: 81, symbol: 'ФС', latin: 'FS', name: '- концентрирана суспензия за третиране на семена'},
  {position: 82, symbol: 'ФТ', latin: 'FT', name: '- таблетка за фумигация'},
  {position: 83, symbol: 'ФУ', latin: 'FU', name: '- генератор за фумигация'},
  {position: 84, symbol: 'ХН', latin: 'HN', name: '- концентрат, отделящ мъгла при нагряване'}
];


@Component({
  templateUrl: './formulations.component.html',
  styleUrls: ['./formulations.component.scss']
})
export class FormulationsComponent implements OnInit {
  headerId = 'aa-formulations';

  private title = 'ПРЗ | Формулации';
  private description = 'Формулации. Списък на означения за използваните в Република Българя формулации';

  breadcrumbTitle = 'ОЗНАЧЕНИЯ';
  breadcrumbName = 'Означения';
  table = [];

  constructor(
    private changeBreadcrumb: ChangeBreadcrumbService,
    private seoService: SeoService,
  ) {
    this.seoService.addTitle(this.title);
    this.seoService.setNoKeywordsMeta(this.description);
    this.table = tableData;
  }

  ngOnInit(): void {
    this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
    this.changeBreadcrumb.emitName(this.breadcrumbName);
    this.changeBreadcrumb.emitId(this.headerId);
  }
}
