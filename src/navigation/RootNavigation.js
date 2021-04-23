import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function resetToSignIn() {
  navigationRef.current?.resetRoot({
    index: 0,
    routes: [{name: 'SignIn'}],
  });
}

export function goBack() {
  navigationRef.current?.goBack();
}
