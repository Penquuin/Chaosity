import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StaticModule } from "./static/static.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DynamicModule } from "./dynamic/dynamic.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StaticModule, DynamicModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
