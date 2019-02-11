<a name="2.0.1"></a>
# [2.0.1](https://github.com/lexzhukov/ngx-siema/compare/2.0.0...v2.0.1) (2017-08-19)


### Bug Fixes

* **component:** check siema instance on service subscriptions (#54) ([a7d4b45](https://github.com/lexzhukov/ngx-siema/commit/a7d4b45))
* **component:** fix #55 (#56) ([cf0d708](https://github.com/lexzhukov/ngx-siema/commit/cf0d708)), closes [#55](https://github.com/lexzhukov/ngx-siema/issues/55) [#56](https://github.com/lexzhukov/ngx-siema/issues/56)

<a name="2.0.0"></a>
# [2.0.0](https://github.com/lexzhukov/ngx-siema/compare/1.2.0...2.0.0) (2017-07-09)


### Bug Fixes

* **component:** fix #18 ([24d6655](https://github.com/lexzhukov/ngx-siema/commit/24d6655)), closes [#18](https://github.com/lexzhukov/ngx-siema/issues/18)
* **component:** fix #45 ([f0a516b](https://github.com/lexzhukov/ngx-siema/commit/f0a516b)), closes [#45](https://github.com/lexzhukov/ngx-siema/issues/45)
* **component:** fix #49 ([f0a516b](https://github.com/lexzhukov/ngx-siema/commit/f0a516b)), closes [#49](https://github.com/lexzhukov/ngx-siema/issues/49)


### Features

* **component:** add possibility of use multiple instances of ngx-siema ([f0a516b](https://github.com/lexzhukov/ngx-siema/commit/f0a516b)), closes [#50](https://github.com/lexzhukov/ngx-siema/issues/50):tada:


### Breaking changes

* **component:** `@Input() selector` is removed. Use `selector` property from `NgxSiemaOptions` options
* **component:** added `NgxSiemaService` for using with multiple instances of ngx-siema

<a name="1.2.0"></a>
# [1.2.0](https://github.com/lexzhukov/ngx-siema/compare/1.1.0...1.2.0) (2017-05-17)

### Features

* **component:** add compatibility with siema 1.4.6
* **component:** add `@Output() remove`
* **component:** add `@Output() insert`
* **component:** add `@Output() prepend`
* **component:** add `@Output() append`
* **component:** add `@Output() destroy`
* **component:** add `@Output() currentSlide`

### Breaking changes

* **component:** `@Input() ngxClass` is replaced with `@Input() selector`

<a name="1.1.0"></a>
# [1.1.0](https://github.com/lexzhukov/ngx-siema/compare/1.0.0...1.1.0) (2017-04-21)

### Bud fixes

* **component:** update siema to 1.3.1 ([a10f5cd](https://github.com/lexzhukov/ngx-siema/commit/a10f5cdb492180fa689ff30ea8c7123ce54c11c5)), ([#17](https://github.com/lexzhukov/ngx-siema/pull/17))
* **component:** crash due to Siema instance doesn't have `removeAllListeners()` ([09885cc](https://github.com/lexzhukov/ngx-siema/commit/09885cc143c3a09d9f42c4011a39bbaf1d9ccbcd)), closes ([#18](https://github.com/lexzhukov/ngx-siema/issues/18))

### Features

* **component:** update angular to 4.0.0

### Breaking changes

* **component:** the `@Output` parameters are renamed: onNext -> next, onPrev -> prev, onGoTo -> goTo
* **component:** the public methods are renamed: next -> onNext, prev -> onPrev, goTo -> onGoTo

<a name="1.0.0"></a>
# 1.0.0 (2017-01-29)

### Features

* First Release
