import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IConfig {
  baseApiPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientConfigService {
  private config: IConfig;

  constructor(private http: HttpClient) { }

  static init(clientConfig: ClientConfigService) {
    return () => clientConfig.loadAppConfig();
  }

  loadAppConfig() {
    return this.http
      .get('/assets/client-config.json')
      .toPromise()
      .then((data: IConfig) => {
        this.config = data;
      });
  }

  getConfig() {
    return this.config;
  }

  getByKey(key: keyof IConfig) {
    return this.config[key];
  }
}
