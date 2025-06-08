import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Daw} from '../../../section/module/despliegue-de-aplicaciones/ut1-daw/ut1-daw';
import {Ut4Daw} from '../../../section/module/despliegue-de-aplicaciones/ut4-daw/ut4-daw';
import {Ut5Daw} from '../../../section/module/despliegue-de-aplicaciones/ut5-daw/ut5-daw';
import {Ut3Daw} from '../../../section/module/despliegue-de-aplicaciones/ut3-daw/ut3-daw';
import {Ut2Daw} from '../../../section/module/despliegue-de-aplicaciones/ut2-daw/ut2-daw';

export const DESPLIEGUE_DE_APLICACIONES_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Daw },
  { path: 'ut2', component: Ut2Daw },
  { path: 'ut3', component: Ut3Daw },
  { path: 'ut4', component: Ut4Daw },
  { path: 'ut5', component: Ut5Daw },
];
