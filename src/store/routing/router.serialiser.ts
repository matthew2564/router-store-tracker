import { Injectable } from '@angular/core';
import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { Store } from '@ngrx/store';

import { NAVIGATING } from '../nav-stack/nav-stack.actions';
import { StoreRootState } from '../store.model';
import { RouterStateUrl } from './router.model';

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {

  constructor(public store$: Store<StoreRootState>) {}

  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;

    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    const routeState = { url, params, queryParams };

    // keep track of page changes, adding each to the store
    this.store$.dispatch(NAVIGATING(routeState));

    return routeState;
  }
}
