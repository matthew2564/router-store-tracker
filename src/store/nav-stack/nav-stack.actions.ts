import { createAction } from '@ngrx/store';
import { RouterStateUrl } from '../routing/router.model';

export const NAVIGATING = createAction(
    '[App navigation]: Navigating',
    (routerState: RouterStateUrl) => ({ routerState }),
);

export const EMPTY_STACK = createAction(
    '[App navigation]: Emptying nav stack',
);
