import { Routes } from '@angular/router';
import {Ut1Prog} from '../../../section/module/programacion/ut1-prog/ut1-prog';
import {Programacion} from '../../../section/module/programacion/programacion';

export const DISENO_DE_INTERFACES_WEB_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Prog },
  { path: 'ut2', component: Ut1Prog },
  { path: 'ut3', component: Ut1Prog },
  { path: 'ut4', component: Ut1Prog },
  { path: 'ut5', component: Ut1Prog },
  { path: 'ut6', component: Ut1Prog },
  { path: 'ut7', component: Ut1Prog },
  { path: 'ut8', component: Ut1Prog },
  { path: 'ut9', component: Ut1Prog },
  { path: 'ut10', component: Ut1Prog },
];
