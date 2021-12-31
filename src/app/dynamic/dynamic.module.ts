import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { StaticModule } from "../static/static.module";
import { SharedModule } from "../shared/shared.module";
import { OopsComponent } from "./oops/oops.component";

@NgModule({
  declarations: [HomeComponent, OopsComponent],
  imports: [CommonModule, StaticModule, SharedModule],
})
export class DynamicModule {}
