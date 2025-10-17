import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let isAuthorized: boolean = false;

  if (!isAuthorized) alert("User does not have authorization.");
  return isAuthorized;
};
