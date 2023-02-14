import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  FAKE_GRAPH_API_CONFIG,
  FakeGraphApiConfig,
} from './fake-graph-api-config';
import { FakeGraphBackendHttpInterceptor } from './fake-graph-api-interceptor';

@NgModule({
  imports: [CommonModule],
})
/**
 * @param {FakeGraphApiConfig} config The configuration to use for the fake graph api
 */
export class FakeGraphApiModule {
  /**
   *
   * @param config The configuration to use for the fake graph api
   * @return {ModuleWithProviders<FakeGraphApiModule>}
   */
  public static forRoot(
    config: FakeGraphApiConfig
  ): ModuleWithProviders<FakeGraphApiModule> {
    return {
      ngModule: FakeGraphApiModule,
      providers: [
        {
          provide: FAKE_GRAPH_API_CONFIG,
          useValue: config,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FakeGraphBackendHttpInterceptor,
          multi: true,
        },
      ],
    };
  }
}

export * from './fake-graph-api-config';
