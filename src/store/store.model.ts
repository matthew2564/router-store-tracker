import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './routing/router.model';

export interface StoreRootState {
    router: fromRouter.RouterReducerState<any>;
    navStack: RouterStateUrl[];
}
