import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WildPageComponent } from './wild-page/wild-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { TermsUseComponent } from './terms-use/terms-use.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'faq', component: DonatePageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: 'terms-of-use', component: TermsUseComponent },
    { path: 'not-found', component: WildPageComponent },
    { path: '**', redirectTo: '/not-found' }
];

const routerOptions: ExtraOptions = {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule] 
})

export class AppRoutingModule { }