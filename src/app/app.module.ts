import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageComponent} from './account-holder/main-page.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbLayoutModule, NbListModule,
  NbSelectModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule
} from "@nebular/theme";
import {PaymentTypesComponent} from './payment-types/payment-types.component';
import {HelpComponent} from './help/help.component';
import {PaymentBankDetailsComponent} from './payment-types/payment-bank-details/payment-bank-details.component';
import {PaymentScanComponent} from './payment-types/payment-scan/payment-scan.component';
import {PaymentScheduleComponent} from './payment-types/payment-schedule/payment-schedule.component';
import {PaymentRequestComponent} from './payment-types/payment-request/payment-request.component';
import {AppTemplateComponent} from './app-template/app-template.component';
import { AccountComponent } from './account/account.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'paymentTypes', component: PaymentTypesComponent},
  {path: 'help', component: HelpComponent},
  {path: 'paymentTypeBankDetails', component: PaymentBankDetailsComponent},
  {path: 'paymentTypeScan', component: PaymentScanComponent},
  {path: 'paymentSchedule', component: PaymentScheduleComponent},
  {path: 'paymentRequest', component: PaymentRequestComponent},
  {path: 'account/:accountId', component: AccountComponent},
  {path: 'account/:accountId/accountDetail', component: AccountDetailComponent},
  {path: 'account/:accountId/contactProfile', component: ContactProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PaymentTypesComponent,
    HelpComponent,
    PaymentBankDetailsComponent,
    PaymentScanComponent,
    PaymentScheduleComponent,
    PaymentRequestComponent,
    AppTemplateComponent,
    AccountComponent,
    AccountDetailComponent,
    ContactProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    NbInputModule,
    NbTabsetModule,
    Ng2SmartTableModule,
    NbListModule,
    NbAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
