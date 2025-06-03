import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Prog} from '../../../section/module/programacion/ut1-prog/ut1-prog';
import {Ut2Prog} from '../../../section/module/programacion/ut2-prog/ut2-prog';
import {Ut3Prog} from '../../../section/module/programacion/ut3-prog/ut3-prog';
import {Ut4Prog} from '../../../section/module/programacion/ut4-prog/ut4-prog';
import {Ut5Prog} from '../../../section/module/programacion/ut5-prog/ut5-prog';
import {Ut6Prog} from '../../../section/module/programacion/ut6-prog/ut6-prog';
import {Ut7Prog} from '../../../section/module/programacion/ut7-prog/ut7-prog';
import {Ut8Prog} from '../../../section/module/programacion/ut8-prog/ut8-prog';
import {Ut9Prog} from '../../../section/module/programacion/ut9-prog/ut9-prog';
import {Ut10Prog} from '../../../section/module/programacion/ut10-prog/ut10-prog';

export const PROGRAMACION_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Prog },
  { path: 'ut2', component: Ut2Prog },
  { path: 'ut3', component: Ut3Prog },
  { path: 'ut4', component: Ut4Prog },
  { path: 'ut5', component: Ut5Prog },
  { path: 'ut6', component: Ut6Prog },
  { path: 'ut7', component: Ut7Prog },
  { path: 'ut8', component: Ut8Prog },
  { path: 'ut9', component: Ut9Prog },
  { path: 'ut10', component: Ut10Prog },
];
