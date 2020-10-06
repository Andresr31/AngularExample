import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './Components/menu-navegacion/menu-navegacion.component';
import { AboutComponent } from './Components/about/about.component';
import { StudentsComponent } from './Components/students/students.component';
import { HomeComponent } from './Components/home/home.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    AboutComponent,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
