import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { StaticModule } from "../static/static.module";
import { SharedModule } from "../shared/shared.module";
import { OopsComponent } from "./oops/oops.component";
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [HomeComponent, OopsComponent, BlogComponent],
  imports: [CommonModule, StaticModule, SharedModule],
})
export class DynamicModule {}
