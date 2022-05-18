import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Ventana1Component } from './ventana1/ventana1.component';
import { Ventana2Component } from './ventana2/ventana2.component';
import { Ventana3Component } from './ventana3/ventana3.component';
import { Ventana4Component } from './ventana4/ventana4.component';

const routes: Routes = [
    {   
        path: '', 
        component: Ventana1Component 
    },
    {
        path: 'ventana1',
        component: Ventana1Component
    },
    {   path: 'ventana2',
        component: Ventana2Component
    },
    {   path: 'ventana3',
        component: Ventana3Component
    },
    {   path: 'ventana4',
        component: Ventana4Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
