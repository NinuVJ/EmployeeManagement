import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');
  const router = inject(Router);

  const userData = localStorage.getItem('localUserData');
  if (userData != null) {
    const currentEmployeeDetails = JSON.parse(userData);
    return currentEmployeeDetails.role;
  }

  if (token) {
    if (userData === 'hr') {
      router.navigate(['hr']);
      return true;
    } else if (userData === 'employee') {
      router.navigate(['employee']);
      return true;
    }
  } else {
    router.navigate(['login']);
    return false;
  }

};
