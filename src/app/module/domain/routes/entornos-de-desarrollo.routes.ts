import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Ed} from '../../../section/module/entornos-de-desarrollo/ut1-ed/ut1-ed';
import {Ut2Ed} from '../../../section/module/entornos-de-desarrollo/ut2-ed/ut2-ed';
import {Ut3Ed} from '../../../section/module/entornos-de-desarrollo/ut3-ed/ut3-ed';
import {Ut4Ed} from '../../../section/module/entornos-de-desarrollo/ut4-ed/ut4-ed';
import {Ut5Ed} from '../../../section/module/entornos-de-desarrollo/ut5-ed/ut5-ed';

export const ENTORNOS_DE_DESARROLLO_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Ed },
  { path: 'ut2', component: Ut2Ed },
  { path: 'ut3', component: Ut3Ed },
  { path: 'ut4', component: Ut4Ed },
  { path: 'ut5', component: Ut5Ed },
];
