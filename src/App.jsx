import { useState } from 'react';
import WalletApp from './WalletApp';
import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthWallet';
import Home from './Home';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
      <Home></Home>
      {/* <WalletApp mnemonic={mnemonic} setMnemonic={setMnemonic} />
      <div>
        <h2>Solana Wallet</h2>
        <SolanaWallet mnemonic={mnemonic} />
      </div>
      <div>
        <h2>Ethereum Wallet</h2>
        <EthWallet mnemonic={mnemonic} />
      </div> */}
    </div> 
  );
}

export default App;
