[![Build Status](https://travis-ci.org/lexzhukov/ngx-siema.svg?branch=master)](https://travis-ci.org/lexzhukov/ngx-siema)

# ngx-siema

[Siema](https://pawelgrzybek.com/siema/) - Lightweight and simple carousel with no dependencies.

## Installation

`npm i ngx-siema`

## Sample

Include NgxSiemaModule in your main module:

```javascript
import { NgxSiemaModule } from 'ngx-siema';

@NgModule({
  // ...
  imports:      [
    NgxSiemaModule.forRoot(),
  ],
  // ...
})
export class AppModule { }
```

Then use in your component:

```javascript
import { Component } from '@angular/core';
import { NgxSiemaOptions } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
    <ngx-siema [options]="options">
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--yellow.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
    </ngx-siema>
  `,
})
export class SampleComponent implements OnInit {

  options: NgxSiemaOptions = {
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: false,
    onInit: () => {
      // runs immediately after first initialization
    },
    onChange: () => {
      // runs after slide change
    },
  };
}
```

Example of usage with the navigation buttons:

```javascript
import { Component } from '@angular/core';
import { NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
    <ngx-siema [options]="options">
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--yellow.svg">
      </ngx-siema-slide>
      <ngx-siema-slide>
        <img src="assets/siema--pink.svg">
      </ngx-siema-slide>
    </ngx-siema>
    <button type="button" (click)="prev()">Prev</button>
    <button type="button" (click)="next()">Next</button>
    <button type="button" (click)="goTo()">GoTo</button>
  `,
})
export class SampleComponent {

  options: NgxSiemaOptions = {
    selector: '.siema',
  };

  constructor(private ngxSiemaService: NgxSiemaService) {
  }

  prev() {
    this.ngxSiemaService.prev(1)
      .subscribe((data: any) => console.log(data));
  }

  next() {
    this.ngxSiemaService.next(1)
      .subscribe((data: any) => console.log(data));
  }

  goTo() {
    this.ngxSiemaService.goTo(1)
      .subscribe((data: any) => console.log(data));
  }
}
```

Example of usage with multiple instances of ngx-siema

```javascript
import { Component } from '@angular/core';
import { NgxSiemaOptions, NgxSiemaService } from 'ngx-siema';

@Component({
  selector: 'sample',
  template: `
    <ngx-siema [options]="options">
      <ngx-siema-slide *ngFor="let n of slides">{{ n }}</ngx-siema-slide>
    </ngx-siema>

    <ngx-siema [options]="options2">
      <ngx-siema-slide *ngFor="let n of slides">{{ n }}</ngx-siema-slide>
    </ngx-siema>

    <button type="button" (click)="next()">Next</button>
    <button type="button" (click)="prev()">Prev</button>
  `,
})
export class SampleComponent {

  options: NgxSiemaOptions = {
    selector: '.siema',
  };

  options2: NgxSiemaOptions = {
    selector: '.siema2',
  };

  slides: number[] = [1, 2, 3, 4, 5];

  constructor(private ngxSiemaService: NgxSiemaService) {
  }

  next() {
    this.ngxSiemaService.next(1)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  prev() {
    // Use the prev function only for ngx-siema instance with selector '.siema'
    this.ngxSiemaService.prev(1, '.siema')
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
```

## License
[MIT](LICENSE) license.
