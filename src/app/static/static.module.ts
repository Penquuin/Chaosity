import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopbarComponent } from "./topbar/topbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BasepageComponent } from "./basepage/basepage.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [TopbarComponent, BasepageComponent],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, SharedModule],
  exports: [TopbarComponent, BasepageComponent, MatSidenavModule],
})
export class StaticModule {}
