import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './component/app.component';
import { DataAccessService } from './service';
import { TOKENS_PROVIDERS } from './tokens/countries-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ...TOKENS_PROVIDERS,
    DataAccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
