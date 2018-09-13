import { Component, OnInit, Output } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

import { ModalService } from './../../services/modal.service';
import { PassDataService } from './../../services/pass-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
      trigger('slideIn', [
        state('*', style({ 'overflow-y': 'hidden' })),
        state('void', style({ 'overflow-y': 'hidden' })),
        transition('* => void', [
            style({ height: '*' }),
            animate(250, style({ height: 0 }))
        ]),
        transition('void => *', [
          style({ height: '0' }),
          animate(250, style({ height: '*' }))
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  public openFormWindow: boolean = false;
  constructor(public modalService: ModalService, public passDataService: PassDataService) { }

  ngOnInit() {
  }

  public openModal() {
    this.openFormWindow = !this.openFormWindow;
  }

  public openForm() {
    this.modalService.toggleModalForm();
  }

  public saveValue(event) {
    this.passDataService.passedData = event;
  }
}
