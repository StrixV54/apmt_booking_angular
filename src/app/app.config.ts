import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MasterService } from './service/master/master.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), MasterService],
};
