import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayPipesModule } from './pipes/array/array-pipes.module';
import { BooleanPipesModule } from './pipes/boolean/boolean-pipes.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    ArrayPipesModule,
    BooleanPipesModule
  ]
})
export class PipesModule {}

export * from './pipes/array/array-pipes.module';
export * from './pipes/boolean/boolean-pipes.module';

