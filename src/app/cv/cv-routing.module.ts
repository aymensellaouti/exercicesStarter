import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth.guard';
import { APP_ROUTES } from '../config/routes.config';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { MasterDetailCvComponent } from './master-detail-cv/master-detail-cv.component';
import { cvsResolver } from './resolvers/cvs.resolver';


const routes: Routes = [
  {
    path: ``,
    children: [
      {
        path: '',
        component: CvComponent,
        resolve: { cvs: cvsResolver },
      },
      { path: 'add', component: AddCvComponent, canActivate: [authGuard] },
      {
        path: 'list',
        component: MasterDetailCvComponent,
        children: [{ path: `:id`, component: DetailsCvComponent }],
      },
      { path: `:id`, component: DetailsCvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
