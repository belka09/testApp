import { Component, OnInit } from '@angular/core';
import { PassDataService } from './../../services/pass-data.service';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component implements OnInit {

  constructor(public passDataService: PassDataService) { }

  ngOnInit() {
  }

}
