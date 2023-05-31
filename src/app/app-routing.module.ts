import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';



const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    { 
      path: 'user/:userName',
      component: PhotoListComponent,
      resolve: {
          photos: PhotoListResolver
        }
    },

    { 
      path: 'p/add', component: PhotoFormComponent
    },
    
    {
     path: '**', component: NotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
