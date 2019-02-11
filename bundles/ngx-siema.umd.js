(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('siema'), require('rxjs/BehaviorSubject'), require('rxjs/ReplaySubject'), require('rxjs/add/operator/publish'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'siema', 'rxjs/BehaviorSubject', 'rxjs/ReplaySubject', 'rxjs/add/operator/publish', '@angular/common'], factory) :
	(factory((global['ngx-siema'] = global['ngx-siema'] || {}),global.ng.core,global.siema,global.Rx,global.Rx,global.Rx.Observable.prototype,global.ng.common));
}(this, (function (exports,_angular_core,Siema,rxjs_BehaviorSubject,rxjs_ReplaySubject,rxjs_add_operator_publish,_angular_common) { 'use strict';

Siema = Siema && 'default' in Siema ? Siema['default'] : Siema;

var next$ = new rxjs_ReplaySubject.ReplaySubject(1);
var prev$ = new rxjs_ReplaySubject.ReplaySubject(1);
var goTo$ = new rxjs_ReplaySubject.ReplaySubject(1);
var remove$ = new rxjs_ReplaySubject.ReplaySubject(1);
var insert$ = new rxjs_ReplaySubject.ReplaySubject(1);
var prepend$ = new rxjs_ReplaySubject.ReplaySubject(1);
var append$ = new rxjs_ReplaySubject.ReplaySubject(1);
var destroy$ = new rxjs_ReplaySubject.ReplaySubject(1);
var currentSlide$ = new rxjs_ReplaySubject.ReplaySubject(1);
var NgxSiemaService = (function () {
    function NgxSiemaService() {
    }
    NgxSiemaService.prototype.next = function (numbers, selector) {
        if (numbers === void 0) { numbers = 1; }
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        next$.next({ selector: selector, numbers: numbers, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.prev = function (numbers, selector) {
        if (numbers === void 0) { numbers = 1; }
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        prev$.next({ selector: selector, numbers: numbers, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.goTo = function (index, selector) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        goTo$.next({ selector: selector, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.remove = function (index, selector) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        remove$.next({ selector: selector, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.insert = function (item, index, selector) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        insert$.next({ selector: selector, item: item, index: index, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.prepend = function (item, selector) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        prepend$.next({ selector: selector, item: item, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.append = function (item, selector) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        append$.next({ selector: selector, item: item, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.destroy = function (restoreMarkup, selector) {
        if (restoreMarkup === void 0) { restoreMarkup = false; }
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        destroy$.next({ selector: selector, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.currentSlide = function (selector) {
        var listener = new rxjs_BehaviorSubject.BehaviorSubject(null);
        currentSlide$.next({ selector: selector, listener: listener });
        return listener.asObservable();
    };
    NgxSiemaService.prototype.onNext = function () {
        return next$.publish().refCount();
    };
    NgxSiemaService.prototype.onPrev = function () {
        return prev$.publish().refCount();
    };
    NgxSiemaService.prototype.onGoTo = function () {
        return goTo$.publish().refCount();
    };
    NgxSiemaService.prototype.onRemove = function () {
        return remove$.publish().refCount();
    };
    NgxSiemaService.prototype.onInsert = function () {
        return insert$.publish().refCount();
    };
    NgxSiemaService.prototype.onPrepend = function () {
        return prepend$.publish().refCount();
    };
    NgxSiemaService.prototype.onAppend = function () {
        return append$.publish().refCount();
    };
    NgxSiemaService.prototype.onDestroy = function () {
        return destroy$.publish().refCount();
    };
    NgxSiemaService.prototype.onCurrentSlide = function () {
        return currentSlide$.publish().refCount();
    };
    return NgxSiemaService;
}());
NgxSiemaService.decorators = [
    { type: _angular_core.Injectable },
];
NgxSiemaService.ctorParameters = function () { return []; };

var NgxSiemaSlideComponent = (function () {
    function NgxSiemaSlideComponent() {
    }
    return NgxSiemaSlideComponent;
}());
NgxSiemaSlideComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ngx-siema-slide',
                styles: [
                    "\n      :host {\n        display: flex;\n      }\n    ",
                ],
                template: "\n    <ng-content></ng-content>\n  ",
            },] },
];
NgxSiemaSlideComponent.ctorParameters = function () { return []; };
var NgxSiemaComponent = (function () {
    function NgxSiemaComponent(ngxSiemaService) {
        this.ngxSiemaService = ngxSiemaService;
        this.next = new _angular_core.EventEmitter();
        this.prev = new _angular_core.EventEmitter();
        this.goTo = new _angular_core.EventEmitter();
        this.remove = new _angular_core.EventEmitter();
        this.insert = new _angular_core.EventEmitter();
        this.prepend = new _angular_core.EventEmitter();
        this.append = new _angular_core.EventEmitter();
        this.destroy = new _angular_core.EventEmitter();
        this.currentSlide = new _angular_core.EventEmitter();
    }
    NgxSiemaComponent.prototype.ngAfterViewInit = function () {
        this.instance = new Siema(this.options);
    };
    NgxSiemaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngxClass = this.options.selector.replace('.', '');
        this.nextSubscription = this.ngxSiemaService.onNext()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.next(data.numbers, function () {
                    _this.next.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.prevSubscription = this.ngxSiemaService.onPrev()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.prev(data.numbers, function () {
                    _this.prev.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.goToSubscription = this.ngxSiemaService.onGoTo()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.goTo(data.index, function () {
                    _this.goTo.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.removeSubscription = this.ngxSiemaService.onRemove()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.remove(data.index, function () {
                    _this.remove.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.insertSubscription = this.ngxSiemaService.onInsert()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.insert(data.item, data.index, function () {
                    _this.insert.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.prependSubscription = this.ngxSiemaService.onPrepend()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.prepend(data.item, function () {
                    _this.prepend.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.appendSubscription = this.ngxSiemaService.onAppend()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.append(data.item, function () {
                    _this.append.emit({
                        selector: _this.options.selector,
                        currentSlide: _this.instance.currentSlide,
                    });
                    data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
                });
            }
        });
        this.destroySubscription = this.ngxSiemaService.onDestroy()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.instance.destroy(data.restoreMarkup, function () {
                    _this.destroy.emit({
                        selector: _this.options.selector,
                    });
                    data.listener.next({ selector: _this.options.selector });
                });
            }
        });
        this.currentSlideSubscription = this.ngxSiemaService.onCurrentSlide()
            .subscribe(function (data) {
            if (_this.compareSelectors(data.selector) && _this.instance) {
                _this.currentSlide.emit({
                    selector: _this.options.selector,
                    currentSlide: _this.instance.currentSlide,
                });
                data.listener.next({ selector: _this.options.selector, currentSlide: _this.instance.currentSlide });
            }
        });
    };
    NgxSiemaComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.instance) {
            setTimeout(function () {
                _this.instance.destroy();
                _this.instance = null;
            });
        }
        this.nextSubscription.unsubscribe();
        this.prevSubscription.unsubscribe();
        this.goToSubscription.unsubscribe();
        this.removeSubscription.unsubscribe();
        this.insertSubscription.unsubscribe();
        this.prependSubscription.unsubscribe();
        this.appendSubscription.unsubscribe();
        this.destroySubscription.unsubscribe();
        this.currentSlideSubscription.unsubscribe();
    };
    NgxSiemaComponent.prototype.onNext = function (numbers) {
        if (numbers === void 0) { numbers = 1; }
        this.instance.next(numbers, this.next.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onPrev = function (numbers) {
        if (numbers === void 0) { numbers = 1; }
        this.instance.prev(numbers, this.next.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onGoTo = function (index) {
        this.instance.goTo(index, this.goTo.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onRemove = function (index) {
        this.instance.remove(index, this.remove.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onInsert = function (item, index) {
        this.instance.insert(item, index, this.insert.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onPrepend = function (item) {
        this.instance.prepend(item, this.prepend.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onAppend = function (item) {
        this.instance.append(item, this.append.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onDestroy = function (restoreMarkup) {
        if (restoreMarkup === void 0) { restoreMarkup = false; }
        this.instance.destroy(restoreMarkup, this.destroy.emit({
            currentSlide: this.instance.currentSlide,
        }));
    };
    NgxSiemaComponent.prototype.onCurrentSlide = function () {
        this.currentSlide.emit({
            currentSlide: this.instance.currentSlide,
        });
    };
    NgxSiemaComponent.prototype.compareSelectors = function (selector) {
        return !selector || selector === this.options.selector;
    };
    return NgxSiemaComponent;
}());
NgxSiemaComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ngx-siema',
                template: "\n    <div class=\"{{ ngxClass }}\">\n      <ng-content select=\"ngx-siema-slide\"></ng-content>\n    </div>\n  ",
            },] },
];
NgxSiemaComponent.ctorParameters = function () { return [
    { type: NgxSiemaService, },
]; };
NgxSiemaComponent.propDecorators = {
    'options': [{ type: _angular_core.Input },],
    'next': [{ type: _angular_core.Output },],
    'prev': [{ type: _angular_core.Output },],
    'goTo': [{ type: _angular_core.Output },],
    'remove': [{ type: _angular_core.Output },],
    'insert': [{ type: _angular_core.Output },],
    'prepend': [{ type: _angular_core.Output },],
    'append': [{ type: _angular_core.Output },],
    'destroy': [{ type: _angular_core.Output },],
    'currentSlide': [{ type: _angular_core.Output },],
};

var NgxSiemaModule = (function () {
    function NgxSiemaModule() {
    }
    NgxSiemaModule.forRoot = function () {
        return {
            ngModule: NgxSiemaModule,
            providers: [
                NgxSiemaService,
            ],
        };
    };
    return NgxSiemaModule;
}());
NgxSiemaModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                ],
                declarations: [
                    NgxSiemaComponent,
                    NgxSiemaSlideComponent,
                ],
                exports: [
                    NgxSiemaComponent,
                    NgxSiemaSlideComponent,
                ],
            },] },
];
NgxSiemaModule.ctorParameters = function () { return []; };

exports.NgxSiemaSlideComponent = NgxSiemaSlideComponent;
exports.NgxSiemaComponent = NgxSiemaComponent;
exports.NgxSiemaService = NgxSiemaService;
exports.NgxSiemaModule = NgxSiemaModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
