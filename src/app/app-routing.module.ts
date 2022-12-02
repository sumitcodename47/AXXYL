import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeesTaxesComponent } from './fees-taxes/fees-taxes.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'taxes',
    component: FeesTaxesComponent,
  },
  {
    path: 'registration',
    component: RegisterComponent,
  },
  {
    path: 'termandcondition',
    component: TermConditionComponent,
  },
  {
    path: 'privacypolicy',
    component: PrivacyPolicyComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
