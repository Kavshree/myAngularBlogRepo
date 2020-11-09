import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component'

/*Routers*/
import { RouterModule } from '@angular/router';
import { MainRoutes } from './RoutingModule/mainRoutes.routes';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
