/*
 * AMRIT – Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector:
    '[appAllowMax][formControlName],[appAllowMax][formControl],[appAllowMax][ngModel],[appAllowMax]',
})
export class NumberValidatorDirective {
  @Input('appAllowMax')
  public max!: number;

  constructor(private elementRef: ElementRef) {}

  validate(input: any) {
    const max = this.max;

    if (+input <= +max) return true;
    else return false;
  }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const value = event.target.value;

    if (!this.validate(value)) event.target.value = this.lastValue;

    this.lastValue = event.target.value;
  }

  lastValue = null;
  @HostListener('focus', ['$event'])
  onFocus(event: any) {
    this.lastValue = event.target.value;
  }
}
