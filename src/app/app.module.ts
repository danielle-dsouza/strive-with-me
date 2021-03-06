import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { WildPageComponent } from './wild-page/wild-page.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { FaqListComponent } from './donate-page/faq-list/faq-list.component';
import { FaqItemComponent } from './donate-page/faq-list/faq-item/faq-item.component';
import { TermsUseComponent } from './terms-use/terms-use.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    WildPageComponent,
    DonatePageComponent,
    FaqListComponent,
    FaqItemComponent,
    TermsUseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
