import { createContext } from 'react';

const LocalContext = createContext();

const ContextProvider = LocalContext.Provider;
const ContextConsumer = LocalContext.Consumer;

export { ContextConsumer, ContextProvider };
