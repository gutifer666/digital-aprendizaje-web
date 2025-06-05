import { Routes } from '@angular/router';
import {Programacion} from '../../../section/module/programacion/programacion';
import {Ut1Db} from '../../../section/module/bases-de-datos/ut1-db/ut1-db';
import {Ut2Db} from '../../../section/module/bases-de-datos/ut2-db/ut2-db';
import {Ut3Db} from '../../../section/module/bases-de-datos/ut3-db/ut3-db';
import {Ut4Db} from '../../../section/module/bases-de-datos/ut4-db/ut4-db';
import {Ut5Db} from '../../../section/module/bases-de-datos/ut5-db/ut5-db';
import {Ut6Db} from '../../../section/module/bases-de-datos/ut6-db/ut6-db';
import {Ut7Db} from '../../../section/module/bases-de-datos/ut7-db/ut7-db';

export const BASES_DE_DATOS_ROUTES: Routes = [
  { path: '', component: Programacion },
  { path: 'ut1', component: Ut1Db },
  { path: 'ut2', component: Ut2Db },
  { path: 'ut3', component: Ut3Db },
  { path: 'ut4', component: Ut4Db },
  { path: 'ut5', component: Ut5Db },
  { path: 'ut6', component: Ut6Db },
  { path: 'ut7', component: Ut7Db },
];
