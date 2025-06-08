import {Component, inject} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {Content} from '../../../../content/infrastructure/service/content';

@Component({
  selector: 'app-ut1-prog',
    imports: [
        AsyncPipe
    ],
  templateUrl: './ut1-prog.html',
  styleUrl: './ut1-prog.css'
})
export class Ut1Prog {
    private content = inject(Content);
    showOriginalContent$ = this.content.showOriginalContent$;
}
