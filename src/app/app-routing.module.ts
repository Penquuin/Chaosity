import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./dynamic/blog/blog.component";
import { HomeComponent } from "./dynamic/home/home.component";
import { OopsComponent } from "./dynamic/oops/oops.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "blog/:path", component: BlogComponent },
  { path: "blog", component: BlogComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: OopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
