// For each single navigation, these 3 actions are fired off. The ngrx action log then becomes filled with a lot of detail we may not want
// So adding to blacklist here which is referenced in app.module.ts
export const ngrxRouterStoreNavigated = [
    '@ngrx/router-store/navigated',
    '@ngrx/router-store/navigation',
    '@ngrx/router-store/request'
];
