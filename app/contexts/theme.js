import React from 'react';

// both are React components
const { Consumer, Provider } = React.createContext();

// used to consume the information we place on provider
export const ThemeConsumer = Consumer;
// allows information to be shared to components
export const ThemeProvider = Provider;
