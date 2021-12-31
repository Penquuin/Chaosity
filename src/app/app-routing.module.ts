import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./dynamic/home/home.component";
import { OopsComponent } from "./dynamic/oops/oops.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", component: OopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
