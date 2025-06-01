import {Routes} from '@angular/router';
import {Home} from './section/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {
        path: 'programacion',
        loadChildren: () => import('./module/domain/routes/programacion.routes').then(m => m.PROGRAMACION_ROUTES)
    },
    {
        path: 'sistemas-informaticos',
        loadChildren: () => import('./module/domain/routes/sistemas-informaticos.routes').then(m => m.SISTEMAS_INFORMATICOS_ROUTES)
    },
    {
        path: 'bases-de-datos',
        loadChildren: () => import('./module/domain/routes/bases-de-datos.routes').then(m => m.BASES_DE_DATOS_ROUTES)
    },
    {
        path: 'lenguajes-de-marcas',
        loadChildren: () => import('./module/domain/routes/lenguajes-de-marcas.routes').then(m => m.LENGUAJES_DE_MARCAS_ROUTES)
    },
    {
        path: 'entornos-de-desarrollo',
        loadChildren: () => import('./module/domain/routes/entornos-de-desarrollo.routes').then(m => m.ENTORNOS_DE_DESARROLLO_ROUTES)
    },
    {
        path: 'formacion-y-orientacion-laboral',
        loadChildren: () => import('./module/domain/routes/formacion-y-orientacion-laboral.routes').then(m => m.FORMACION_Y_ORIENTACION_LABORAL_ROUTES)
    },
    {
        path: 'desarrollo-web-en-entorno-cliente',
        loadChildren: () => import('./module/domain/routes/desarrollo-web-en-entorno-cliente.routes').then(m => m.DESARROLLO_WEB_EN_ENTORNO_CLIENTE_ROUTES)
    },
    {
        path: 'desarrollo-web-en-entorno-servidor',
        loadChildren: () => import('./module/domain/routes/desarrollo-web-en-entorno-servidor.routes').then(m => m.DESARROLLO_WEB_EN_ENTORNO_SERVIDOR_ROUTES)
    },
    {
        path: 'despliegue-de-aplicaciones',
        loadChildren: () => import('./module/domain/routes/despliegue-de-aplicaciones.routes').then(m => m.DESPLIEGUE_DE_APLICACIONES_ROUTES)
    },
    {
        path: 'diseno-de-interfaces-web',
        loadChildren: () => import('./module/domain/routes/diseno-de-interfaces-web.routes').then(m => m.DISENO_DE_INTERFACES_WEB_ROUTES)
    },
    {
        path: 'empresa-e-iniciativa-emprendedora',
        loadChildren: () => import('./module/domain/routes/empresa-e-iniciativa-emprendedora.routes').then(m => m.EMPRESA_E_INICIATIVA_EMPRENDEDORA_ROUTES)
    },
    {
        path: 'proyecto-daw',
        loadChildren: () => import('./module/domain/routes/proyecto-daw.routes').then(m => m.PROYECTO_DAW_ROUTES)
    },
    {
        path: 'formacion-en-centros-de-trabajo',
        loadChildren: () => import('./module/domain/routes/formacion-en-centros-de-trabajo.routes').then(m => m.FORMACION_EN_CENTROS_DE_TRABAJO_ROUTES)
    }
];
