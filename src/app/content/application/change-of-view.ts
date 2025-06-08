import {inject} from '@angular/core';
import {Content} from '../infrastructure/service/content';
import {Router} from '@angular/router';

export class ChangeOfView {

    private router = inject(Router);
    private content = inject(Content);

    showOriginalContent$ = this.content.showOriginalContent$;

    isUTPage(): boolean {
        const url = this.router.url;
        const parts = url.split('/');
        return parts.length >= 3 && parts[2]?.startsWith('ut');
    }

    toggleOriginalContent() {
        this.content.toggle();
        console.log('Toggling original content');
    }
}
