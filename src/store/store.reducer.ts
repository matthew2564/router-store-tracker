import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { navStackReducer } from './nav-stack/nav-stack.reducer';
import { StoreRootState } from './store.model';

export const reducers: ActionReducerMap<StoreRootState> = {
    router: routerReducer,
    navStack: navStackReducer,
};
