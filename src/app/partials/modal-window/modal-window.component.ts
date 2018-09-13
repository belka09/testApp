import { Component, OnInit } from '@angular/core';

import { ModalService } from './../../services/modal.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalService.toggleModalForm();
  }
}
