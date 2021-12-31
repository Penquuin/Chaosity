import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopbarComponent } from "./topbar/topbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BasepageComponent } from "./basepage/basepage.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TopbarComponent, BasepageComponent, SidenavComponent],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, SharedModule],
  exports: [TopbarComponent, BasepageComponent, SidenavComponent, MatSidenavModule],
})
export class StaticModule {}
