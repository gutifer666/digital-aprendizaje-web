import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {ChangeOfView} from '../../../../content/application/change-of-view';

@Component({
  selector: 'app-ut1-prog',
    imports: [
        AsyncPipe
    ],
  templateUrl: './ut1-prog.html',
  styleUrl: './ut1-prog.css'
})
export class Ut1Prog {
    private changeOfView = new ChangeOfView();
    protected showOriginalContent = this.changeOfView.showOriginalContent();
}
