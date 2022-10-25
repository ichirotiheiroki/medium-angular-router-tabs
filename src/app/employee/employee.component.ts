import { Component, OnInit, Inject } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  constructor() {
    console.log("Работают сотрудники");
  }

  ngOnInit() {}

}
