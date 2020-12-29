import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientConfigService } from './client-config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ClientConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ClientConfigService.init,
      multi: true,
      deps: [ClientConfigService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
