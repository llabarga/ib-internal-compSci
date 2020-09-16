export const SAGA_ACTION = '@@redux-saga/SAGA_ACTION';
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export let URI = window.location.origin.replace("app", "appmed");

// If it's development or local production build
if (process.env.NODE_ENV !== 'production' || URI.includes("2345")) {
  URI = URI.replace("2345", "3000");
}

