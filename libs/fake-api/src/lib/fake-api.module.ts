import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeApiConfig, FAKE_API_CONFIG } from './fake-api-config';
import { FakeBackendHttpInterceptor } from './fake-api-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
})

export class FakeApiModule {
  public static forRoot(config?: FakeApiConfig): ModuleWithProviders<FakeApiModule> {
    return {
      ngModule: FakeApiModule,
      providers: [
        {
          provide: FAKE_API_CONFIG,
          useValue: config,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FakeBackendHttpInterceptor,
          multi: true,
        }
      ],
    };
  }
}

export * from './fake-api-config';
