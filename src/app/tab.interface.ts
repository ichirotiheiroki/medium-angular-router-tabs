import { Route } from "@angular/router";

export interface TabInterface {
  name: string;
  component: any;
  active: boolean;
  route: Route;
  key: string;
}