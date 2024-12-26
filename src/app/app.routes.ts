import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ConsultingServiceComponent } from './components/consulting-service/consulting-service.component';
import { InnovationServiceComponent } from './components/innovation-service/innovation-service.component';
import { BpoServiceComponent } from './components/bpo-service/bpo-service.component';
import { EnvironmentAutomationServiceComponent } from './components/environment-automation-service/environment-automation-service.component';
import { InfocusnewsProductComponent } from './components/infocusnews-product/infocusnews-product.component';
import { BusinessIntelligenceProductComponent } from './components/business-intelligence-product/business-intelligence-product.component';
import { InnovationProductComponent } from './components/innovation-product/innovation-product.component';

export const routes: Routes = [
    {path: '', redirectTo: 'principal', pathMatch: 'full'},
    {path: 'principal', component: PrincipalComponent},
    {path: 'consultingService', component: ConsultingServiceComponent},
    {path: 'innovationService', component: InnovationServiceComponent},
    {path: 'bpoService', component: BpoServiceComponent},
    {path: 'environmentAutomation', component: EnvironmentAutomationServiceComponent},
    {path: 'infocusnwesProduct', component: InfocusnewsProductComponent},
    {path: 'businessIntelligenceProduct', component: BusinessIntelligenceProductComponent},
    {path: 'innovationProduct', component: InnovationProductComponent},
];
