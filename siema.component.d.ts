import { EventEmitter, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { NgxSiemaService } from './siema.service';
export interface NgxSiemaOptions {
    selector: string;
    duration?: number;
    easing?: string;
    perPage?: any;
    startIndex?: number;
    draggable?: boolean;
    threshold?: number;
    loop?: boolean;
    onInit?: Function;
    onChange?: Function;
}
export declare class NgxSiemaSlideComponent {
}
export declare class NgxSiemaComponent implements AfterViewInit, OnInit, OnDestroy {
    private ngxSiemaService;
    options: NgxSiemaOptions;
    next: EventEmitter<any>;
    prev: EventEmitter<any>;
    goTo: EventEmitter<any>;
    remove: EventEmitter<any>;
    insert: EventEmitter<any>;
    prepend: EventEmitter<any>;
    append: EventEmitter<any>;
    destroy: EventEmitter<any>;
    currentSlide: EventEmitter<any>;
    ngxClass: string;
    private instance;
    private nextSubscription;
    private prevSubscription;
    private goToSubscription;
    private removeSubscription;
    private insertSubscription;
    private prependSubscription;
    private appendSubscription;
    private destroySubscription;
    private currentSlideSubscription;
    constructor(ngxSiemaService: NgxSiemaService);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    onNext(numbers?: number): void;
    onPrev(numbers?: number): void;
    onGoTo(index: number): void;
    onRemove(index: number): void;
    onInsert(item: any, index: number): void;
    onPrepend(item: any): void;
    onAppend(item: any): void;
    onDestroy(restoreMarkup?: boolean): void;
    onCurrentSlide(): void;
    private compareSelectors(selector);
}
