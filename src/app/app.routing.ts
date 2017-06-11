import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main.component';

const routes: Routes =
    [ 
      {path : '', component : MainComponent, children : []},
      {path : '**', component : MainComponent, children : []}
    ];

@NgModule(
    {imports : [ RouterModule.forRoot(routes) ], exports : [ RouterModule ]})
export class AppRoutingModule {
}
