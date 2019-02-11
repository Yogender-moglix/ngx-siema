import { Component, Input, Output, EventEmitter } from '@angular/core';
import Siema from 'siema';
import { NgxSiemaService } from './siema.service';
var NgxSiemaSlideComponent = (function () {
    function NgxSiemaSlideComponent() {
    }
    return NgxSiemaSlideComponent;
}());
export { NgxSiemaSlideComponent };
NgxSiemaSlideComponent.decorators = [
    { type: Component, args: [{
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
        this.next = new EventEmitter();
        this.prev = new EventEmitter();
        this.goTo = new EventEmitter();
        this.remove = new EventEmitter();
        this.insert = new EventEmitter();
        this.prepend = new EventEmitter();
        this.append = new EventEmitter();
        this.destroy = new EventEmitter();
        this.currentSlide = new EventEmitter();
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
export { NgxSiemaComponent };
NgxSiemaComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-siema',
                template: "\n    <div class=\"{{ ngxClass }}\">\n      <ng-content select=\"ngx-siema-slide\"></ng-content>\n    </div>\n  ",
            },] },
];
NgxSiemaComponent.ctorParameters = function () { return [
    { type: NgxSiemaService, },
]; };
NgxSiemaComponent.propDecorators = {
    'options': [{ type: Input },],
    'next': [{ type: Output },],
    'prev': [{ type: Output },],
    'goTo': [{ type: Output },],
    'remove': [{ type: Output },],
    'insert': [{ type: Output },],
    'prepend': [{ type: Output },],
    'append': [{ type: Output },],
    'destroy': [{ type: Output },],
    'currentSlide': [{ type: Output },],
};
//# sourceMappingURL=siema.component.js.map