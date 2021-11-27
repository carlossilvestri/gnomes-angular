import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { appRouting } from './app.routes'; // Rutas
import { HeroesService } from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component'; // Servicios
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FiltergnomesPipe } from './pipes/filtergnomes.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
    LoadingComponent,
    FiltergnomesPipe
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
