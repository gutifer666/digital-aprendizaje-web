import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Si} from '../../../section/module/sistemas-informaticos/ut1-si/ut1-si';
import {Ut2Si} from '../../../section/module/sistemas-informaticos/ut2-si/ut2-si';
import {Ut3Si} from '../../../section/module/sistemas-informaticos/ut3-si/ut3-si';
import {Ut4Si} from '../../../section/module/sistemas-informaticos/ut4-si/ut4-si';
import {Ut5Si} from '../../../section/module/sistemas-informaticos/ut5-si/ut5-si';
import {Ut6Si} from '../../../section/module/sistemas-informaticos/ut6-si/ut6-si';
import {Ut7Si} from '../../../section/module/sistemas-informaticos/ut7-si/ut7-si';
import {Ut8Si} from '../../../section/module/sistemas-informaticos/ut8-si/ut8-si';
import {Ut9Si} from '../../../section/module/sistemas-informaticos/ut9-si/ut9-si';

export const SISTEMAS_INFORMATICOS_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Si },
  { path: 'ut2', component: Ut2Si },
  { path: 'ut3', component: Ut3Si },
  { path: 'ut4', component: Ut4Si },
  { path: 'ut5', component: Ut5Si },
  { path: 'ut6', component: Ut6Si },
  { path: 'ut7', component: Ut7Si },
  { path: 'ut8', component: Ut8Si },
  { path: 'ut9', component: Ut9Si },
];
