import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Lm} from '../../../section/module/lenguajes-de-marcas/ut1-lm/ut1-lm';
import {Ut2Lm} from '../../../section/module/lenguajes-de-marcas/ut2-lm/ut2-lm';
import {Ut3Lm} from '../../../section/module/lenguajes-de-marcas/ut3-lm/ut3-lm';
import {Ut4Lm} from '../../../section/module/lenguajes-de-marcas/ut4-lm/ut4-lm';
import {Ut5Lm} from '../../../section/module/lenguajes-de-marcas/ut5-lm/ut5-lm';
import {Ut6Lm} from '../../../section/module/lenguajes-de-marcas/ut6-lm/ut6-lm';

export const LENGUAJES_DE_MARCAS_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Lm },
  { path: 'ut2', component: Ut2Lm },
  { path: 'ut3', component: Ut3Lm },
  { path: 'ut4', component: Ut4Lm },
  { path: 'ut5', component: Ut5Lm },
  { path: 'ut6', component: Ut6Lm },
];
