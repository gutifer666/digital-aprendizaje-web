import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut1-eie/ut1-eie';
import {Ut2Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut2-eie/ut2-eie';
import {Ut3Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut3-eie/ut3-eie';
import {Ut4Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut4-eie/ut4-eie';
import {Ut5Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut5-eie/ut5-eie';
import {Ut6Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut6-eie/ut6-eie';
import {Ut7Eie} from '../../../section/module/empresa-e-iniciativa-emprendedora/ut7-eie/ut7-eie';

export const EMPRESA_E_INICIATIVA_EMPRENDEDORA_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Eie },
  { path: 'ut2', component: Ut2Eie },
  { path: 'ut3', component: Ut3Eie },
  { path: 'ut4', component: Ut4Eie },
  { path: 'ut5', component: Ut5Eie },
  { path: 'ut6', component: Ut6Eie },
  { path: 'ut7', component: Ut7Eie },
];
