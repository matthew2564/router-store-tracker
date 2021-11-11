import { createReducer, on } from '@ngrx/store';
import { RouterStateUrl } from '../routing/router.model';
import { EMPTY_STACK, NAVIGATING } from './nav-stack.actions';

const initialState: RouterStateUrl[] = [];

export const navStackReducer = createReducer(
    initialState,
    on(NAVIGATING, (state, { routerState }) => {
        const stateBefore = (state.length === 0 ) ? {} as RouterStateUrl : state[state.length - 1];
        if (routerState?.url === stateBefore?.url) {
            return [...state];
        }
        return [...state, routerState];
    }),
    on(EMPTY_STACK, () => initialState),
);
