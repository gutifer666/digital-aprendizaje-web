import {inject} from '@angular/core';
import {Content} from '../infrastructure/service/content';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

export class ChangeOfView {

    private router = inject(Router);
    private content = inject(Content);

    isUTPage(): boolean {
        const url = this.router.url;
        const parts = url.split('/');
        return parts.length >= 3 && parts[2]?.startsWith('ut');
    }

    toggleOriginalContent() {
        this.content.toggle();
        console.log('Toggling original content');
    }

    showOriginalContent(): Observable<boolean> {
        return this.content.showOriginalContent$;
    }
}
