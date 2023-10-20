// EthereumContext.js

import { createContext } from 'react';

const EthereumContext = createContext({
  account: null,
  contract: null,
  setAccount: () => {},
  setContract: () => {},
});

export default EthereumContext;
