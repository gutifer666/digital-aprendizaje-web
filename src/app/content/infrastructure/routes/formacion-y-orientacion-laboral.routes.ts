import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Fol} from '../../../section/module/fol/ut1-fol/ut1-fol';
import {Ut2Fol} from '../../../section/module/fol/ut2-fol/ut2-fol';
import {Ut3Fol} from '../../../section/module/fol/ut3-fol/ut3-fol';
import {Ut4Fol} from '../../../section/module/fol/ut4-fol/ut4-fol';
import {Ut5Fol} from '../../../section/module/fol/ut5-fol/ut5-fol';
import {Ut6Fol} from '../../../section/module/fol/ut6-fol/ut6-fol';
import {Ut7Fol} from '../../../section/module/fol/ut7-fol/ut7-fol';
import {Ut8Fol} from '../../../section/module/fol/ut8-fol/ut8-fol';

export const FORMACION_Y_ORIENTACION_LABORAL_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Fol },
  { path: 'ut2', component: Ut2Fol },
  { path: 'ut3', component: Ut3Fol },
  { path: 'ut4', component: Ut4Fol },
  { path: 'ut5', component: Ut5Fol },
  { path: 'ut6', component: Ut6Fol },
  { path: 'ut7', component: Ut7Fol },
  { path: 'ut8', component: Ut8Fol },
];
