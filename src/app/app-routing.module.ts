import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuxComponent, HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, HomeParentComponent } from './home';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second'
          },
          {
            path: 'grand',
            component: HomeGrandComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'change-detection',
    pathMatch: 'full',
    component: HomeParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

