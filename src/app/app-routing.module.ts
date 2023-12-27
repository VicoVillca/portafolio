import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes que se usarán en las rutas
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

// Define las rutas de la aplicación
const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'projects', component: ProjectsComponent }, // Ruta para la sección de proyectos
  { path: 'skills', component: SkillsComponent }, // Ruta para la sección de habilidades
  { path: 'experience', component: ExperienceComponent }, // Ruta para la sección de experiencia
  { path: 'contact', component: ContactComponent }, // Ruta para la sección de contacto
  // Puedes agregar más rutas según sea necesario
  { path: '**', redirectTo: '' } // Redirecciona a la página de inicio si la ruta no coincide
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
