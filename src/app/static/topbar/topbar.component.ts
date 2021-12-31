import { Component, Input, OnInit } from "@angular/core";
import { DrawerService } from "src/app/drawer.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  @Input() toggle!: () => void;
  constructor(public drawer: DrawerService) {}

  ngOnInit(): void {}
}
