import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EditorComponent],
  exports: [EditorComponent],
})
export class CodeEditorFeatureEditorModule {}
