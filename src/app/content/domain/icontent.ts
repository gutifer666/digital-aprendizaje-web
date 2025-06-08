import {Observable} from 'rxjs';

export interface IContent {

    getUrl(): string;
    toggle(): void;
    showOriginalContent(): Observable<boolean>;
}
