import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponentComponent } from './componentes/login-component/login-component.component';
import { HomeComponent } from './componentes/home/home.component';
import { MenuNavegacaoComponent } from './componentes/menu-navegacao/menu-navegacao.component';
import { PlaylistComponent } from './componentes/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    HomeComponent,
    MenuNavegacaoComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
