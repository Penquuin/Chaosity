import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-basepage",
  templateUrl: "./basepage.component.html",
  styleUrls: ["./basepage.component.scss"],
})
export class BasepageComponent implements OnInit {
  @Input() Title!: string;
  @Input() Subtitle!: string;
  constructor() {}

  ngOnInit(): void {}
}
