import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  public showModal: boolean = false;

  constructor() {}

  public toggleModalForm() {
    this.showModal = !this.showModal;
  }
}
