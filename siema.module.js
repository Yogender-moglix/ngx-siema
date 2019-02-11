import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSiemaComponent, NgxSiemaSlideComponent } from './siema.component';
import { NgxSiemaService } from './siema.service';
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
export { NgxSiemaModule };
NgxSiemaModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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
//# sourceMappingURL=siema.module.js.map