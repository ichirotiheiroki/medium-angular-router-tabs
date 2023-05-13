import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from "@angular/core";
import {ActivatedRoute, Router, RoutesRecognized, Route} from "@angular/router";
import {TabInterface} from "./tab.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public tabs: TabInterface[] = [];
  public routes: Route[] = [];
  public currentHoverTabKey: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.adTab(val);
      }
    });
  }

  ngOnInit() {
    this.routes = this.router.config;
  }

  closeTab(tab: TabInterface) {
    if (this.tabs.length > 1) {
      this.tabs = this.tabs.filter(item => item.key !== tab.key);

      if (tab.active) {
        this.deactivateTabs();
        this.router.navigateByUrl(this.tabs[this.tabs.length - 1].route.path);
      }
    }
  }

  hoverTab(tab: TabInterface) {
    this.currentHoverTabKey = tab ? tab.key : null;
  }

  adTab(val: RoutesRecognized) {
    const comp = val.state.root.firstChild.component;

    this.deactivateTabs();

    if (this.tabs.find(tab => tab.name == comp["name"]) == null) {

      this.tabs.push({
        name: comp["name"],
        component: comp,
        key: comp["name"],
        active: true,
        route: val.state.root.firstChild.routeConfig
      });

    } else {
      const tabToActivate = this.tabs.find(tab => tab.name == comp["name"]);
      if (tabToActivate) {
        tabToActivate.active = true;
      }
    }

    this.cd.markForCheck();
  }

  deactivateTabs() {
    this.tabs.forEach(tab => (tab.active = false));
  }

  // getTabInjector(tabKey: string): Injector {
  //   return this.tabInjectors.find(tab => tab.tabKey == tabKey).injector;
  // }
}

// export type TabInjector = { tabKey: string; injector: Injector };


