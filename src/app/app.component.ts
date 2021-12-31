import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { DrawerService } from "./drawer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Chaosity";
  private subs = new Subscription();
  opened = false;
  constructor(private drawerservice: DrawerService) {}
  ngOnInit(): void {
    this.subs.add(
      this.drawerservice.OnDrawerToggle.subscribe(() => {
        this.opened = !this.opened;
      }),
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
