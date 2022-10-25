import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ["./permissions.component.css"]
})
export class PermissionsComponent implements OnInit {
  constructor() {
    console.log("Работают права");
  }

  ngOnInit() {}

  sendData(data: string) {}
}
