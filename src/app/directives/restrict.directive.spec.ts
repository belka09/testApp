import { RestrictDirective } from './restrict.directive';
import { Directive } from '../../../node_modules/@angular/core';

describe('RestrictDirective', () => {
  it('should create an instance', () => {
    const directive = new RestrictDirective(null);
    expect(directive).toBeTruthy();
  });
});