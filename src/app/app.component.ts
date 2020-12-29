import { Component } from '@angular/core';
import { ClientConfigService } from './client-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private clientConfig: ClientConfigService) {
    console.log(clientConfig.getConfig());
  }
}
