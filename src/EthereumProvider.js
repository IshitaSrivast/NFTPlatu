// EthereumProvider.js

import React, { useState } from 'react';
import EthereumContext from './EthereumContext';

const EthereumProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  return (
    <EthereumContext.Provider value={{ account, contract, setAccount, setContract }}>
      {children}
    </EthereumContext.Provider>
  );
}

export default EthereumProvider;
