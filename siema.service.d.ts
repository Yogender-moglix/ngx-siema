import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publish';
export declare class NgxSiemaService {
    next(numbers?: number, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    prev(numbers?: number, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    goTo(index: number, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    remove(index: number, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    insert(item: any, index: number, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    prepend(item: any, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    append(item: any, selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    destroy(restoreMarkup?: boolean, selector?: string): Observable<{
        selector: string;
    }>;
    currentSlide(selector?: string): Observable<{
        selector: string;
        currentSlide: number;
    }>;
    onNext(): Observable<{
        selector: string;
        numbers: number;
    }>;
    onPrev(): Observable<{
        selector: string;
        numbers: number;
    }>;
    onGoTo(): Observable<{
        selector: string;
        index: number;
    }>;
    onRemove(): Observable<{
        selector: string;
        index: number;
    }>;
    onInsert(): Observable<{
        selector: string;
        item: any;
        index: number;
    }>;
    onPrepend(): Observable<{
        selector: string;
        item: any;
    }>;
    onAppend(): Observable<{
        selector: string;
        item: any;
    }>;
    onDestroy(): Observable<{
        selector: string;
    }>;
    onCurrentSlide(): Observable<{
        selector: string;
    }>;
}
