import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-positions",
  templateUrl: "./positions.component.html",
  styleUrls: ["./positions.component.css"]
})
export class PositionsComponent implements OnInit {
  constructor() {
    console.log("Работают должности");
  }

  ngOnInit() {}

  sendData(data: string) {}
}
