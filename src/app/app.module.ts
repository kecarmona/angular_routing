import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtranjeroComponent } from './components/extranjero/extranjero.component';
import { ExtranjeroService } from './components/extranjero/extranjero.service';

@NgModule({
  declarations: [AppComponent, ExtranjeroComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ExtranjeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
