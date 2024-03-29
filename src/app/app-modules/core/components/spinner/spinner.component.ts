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
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerState, SpinnerService } from '../../services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private spinnerStateChanged!: Subscription;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe(
      (state: SpinnerState) => {
        this.visible = state.show;
      },
    );
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
