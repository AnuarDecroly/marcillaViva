import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { AboutUsComponent } from './pages/about-us-component/about-us-component';
import { ProjectsComponent } from './pages/projects-component/projects-component';
import { ContactComponent } from './pages/contact-component/contact-component';
import { SocioComponent } from './pages/socio-component/socio-component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  { path: 'inicio', component: HomeComponent},
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'socio', component: SocioComponent },
  { path: '**', redirectTo: 'inicio' }
];
