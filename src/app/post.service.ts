import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  public Posts: string[] = ["rogue", "language"];
  constructor() {}
}
