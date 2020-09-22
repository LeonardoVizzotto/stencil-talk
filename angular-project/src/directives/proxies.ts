/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'talk-components';


export declare interface MyButton extends Components.MyButton {}
@ProxyCmp({
  inputs: ['as', 'type']
})
@Component({
  selector: 'my-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['as', 'type']
})
export class MyButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Input as IInput } from 'talk-components/dist/types/components/input/input';
export declare interface MyInput extends Components.MyInput {}
@ProxyCmp({
  inputs: ['label', 'type', 'value']
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'type', 'value'],
  outputs: ['changeEvent']
})
export class MyInput {
  /**  */
  changeEvent!: IInput['change'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeEvent']);
  }
}

import { MyNewsletter as IMyNewsletter } from 'talk-components/dist/types/components/newsletter/newsletter';
export declare interface MyNewsletter extends Components.MyNewsletter {}

@Component({
  selector: 'my-newsletter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  outputs: ['submitEvent']
})
export class MyNewsletter {
  /**  */
  submitEvent!: IMyNewsletter['submit'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['submitEvent']);
  }
}


export declare interface MyText extends Components.MyText {}
@ProxyCmp({
  inputs: ['as', 'font', 'size']
})
@Component({
  selector: 'my-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['as', 'font', 'size']
})
export class MyText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
