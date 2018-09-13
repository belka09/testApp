import { TestBed, inject } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService]
    });
  });

  it('should be created', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));

  it('should be toggle boolean variable in service', inject([ModalService], (service: ModalService) => {
    service.toggleModalForm()
    expect(service.showModal).toBeTruthy();
  }));
});
