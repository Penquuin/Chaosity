import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { PostService } from "src/app/post.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit, OnDestroy {
  public mdpath: string | undefined;

  public sub: Subscription = new Subscription();

  constructor(public route: ActivatedRoute, public postService: PostService) {}

  ngOnInit(): void {
    this.sub.add(
      this.route.paramMap.subscribe((paramMap) => {
        const res = paramMap.get("path");
        if (res) this.mdpath = res;
        else this.mdpath = undefined;
      }),
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
