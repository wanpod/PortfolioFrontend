import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './componente/skills/skills.component';
import { ResumeComponent } from './componente/resume/resume.component';
import { PortfolioComponent } from './componente/portfolio/portfolio.component';
import { FooterComponent } from './componente/footer/footer.component';
import { ContactoComponent } from './componente/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
