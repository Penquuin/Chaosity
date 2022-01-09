import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MarkdownModule } from "ngx-markdown";

@NgModule({
  declarations: [],
  imports: [CommonModule, MarkdownModule.forChild()],
  exports: [MatButtonModule, MarkdownModule],
})
export class SharedModule {}
