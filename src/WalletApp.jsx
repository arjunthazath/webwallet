import React from 'react';
import { generateMnemonic } from"bip39";

function WalletApp({ mnemonic, setMnemonic }) {
  const createSeedPhrase = () => {
    const newMnemonic = generateMnemonic();
    console.log("New mnemonic generated:", newMnemonic); // Debugging line
    setMnemonic(newMnemonic);
  };

  return (
    <div><button onClick={createSeedPhrase}>Create Seed Phrase</button><input type="text" value={mnemonic} readOnly /></div>
  );
}

export default WalletApp;
