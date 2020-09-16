import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import {
  MyInput,
  MyButton,
  MyNewsletter,
  MyText,
} from "src/directives/proxies";

@NgModule({
  declarations: [AppComponent, MyInput, MyButton, MyNewsletter, MyText],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
