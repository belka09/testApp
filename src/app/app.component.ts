import { Component, Input } from "@angular/core";
import {
  trigger,
  style,
  animate,
  transition,
  query
} from "@angular/animations";

import { ModalService } from "./services/modal.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("routerAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          style({
            position: "fixed",
            width: "100%",
            transform: "translateX(-100%)"
          }),
          { optional: true }
        ),

        query(
          ":leave",
          animate(
            "500ms ease",
            style({
              position: "fixed",
              width: "100%",
              transform: "translateX(100%)"
            })
          ),
          { optional: true }
        ),

        query(
          ":enter",
          animate(
            "500ms ease",
            style({
              opacity: 1,
              transform: "translateX(0%)"
            })
          ),
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  constructor(public modalService: ModalService) {}
}
