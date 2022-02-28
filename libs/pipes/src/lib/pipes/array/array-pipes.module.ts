import { NgModule } from "@angular/core";
import { ChunkPipe } from "./chunk";
import { FlattenPipe } from "./flatten";

const ARRAY_PIPES = [
    FlattenPipe,
    ChunkPipe
];

@NgModule({
    imports: [],
    declarations: ARRAY_PIPES,
    exports: ARRAY_PIPES
})

export class ArrayPipesModule {}

export { ChunkPipe, FlattenPipe };