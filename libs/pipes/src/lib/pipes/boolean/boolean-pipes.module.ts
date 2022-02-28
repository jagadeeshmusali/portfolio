import { NgModule } from "@angular/core";
import { IsDefinedPipe } from "./is-defined";
import { IsEqualToPipe } from "./is-equal-to";
import { IsFunctionPipe } from "./is-function";

const BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsEqualToPipe,
    IsFunctionPipe
];

@NgModule({
    imports: [],
    declarations: BOOLEAN_PIPES,
    exports: BOOLEAN_PIPES
})

export class BooleanPipesModule {}

export { IsDefinedPipe, IsEqualToPipe, IsFunctionPipe };