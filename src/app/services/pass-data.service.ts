import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PassDataService {
  public passedData: string;
  constructor() {}
}
