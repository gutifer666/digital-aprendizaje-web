import { Routes } from '@angular/router';
import {Ut1Prog} from '../../../section/module/programacion/ut1-prog/ut1-prog';
import {Programacion} from '../../../section/module/programacion/programacion';

export const PROYECTO_DAW_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Prog },
];
