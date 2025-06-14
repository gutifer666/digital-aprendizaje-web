import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Content {

    private showOriginalContentSubject = new BehaviorSubject<boolean>(false);
    //public showOriginalContent$: Observable<boolean> = this.showOriginalContentSubject.asObservable();

    constructor() { }

    toggle(): void {
        const currentValue = this.showOriginalContentSubject.value;
        this.showOriginalContentSubject.next(!currentValue);
    }

    showOriginalContent(): Observable<boolean> {
        return this.showOriginalContentSubject.asObservable();
    }
}
