import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  selector: 'portfolio-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor') private editor: ElementRef<HTMLElement>;
  codeExecutionResult: any;
  error: boolean;

  executeCode(code: any) {
    try {
      let editedCode = Function(code)();
      this.codeExecutionResult = JSON.stringify(editedCode, null, '  ');
      this.error = false;
    } catch (e) {
      this.error = true;
      this.codeExecutionResult = e;
    }
  }

  ngAfterViewInit(): void {
    ace.require('ace/ext/language_tools');
    ace.config.set('fontSize', '14px');
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );
    const aceEditor = ace.edit(this.editor.nativeElement);
    // aceEditor.session.setValue("//Language JavaScript");
    // aceEditor.setOptions({
    //   enableBasicAutocompletion: true,
    //   enableSnippets: true,
    //   enableLiveAutocompletion: true,
    // });

    aceEditor.session.setValue('// Please return your result\n');
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/typescript');
    aceEditor.on('change', () => {
      this.executeCode(aceEditor.getValue());
    });
  }
}
// RQE3KJ
// O5IY2W

// Vadina 10D 16C
// Akshara 32K 24k
// Nag 32J 24J
// Aunty 32H 24H