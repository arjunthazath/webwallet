import { useState } from "react";
import { ethers } from "ethers";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [privateKey, setPrivateKey] = useState("");

    const addWallet = async () => {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        setPrivateKey(child.privateKey);
        const wallet = new Wallet(child.privateKey);
        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, wallet.address]);
    };

    const sendEthereum = async (recipient, amount) => {
        const provider = new ethers.providers.InfuraProvider("mainnet", "eeb023d2de9c4fbcab21978f252d24c1");
        const wallet = new ethers.Wallet(privateKey, provider);

        const transaction = {
            to: recipient,
            value: ethers.utils.parseEther(amount.toString()), // amount in ETH
            gasPrice: await provider.getGasPrice(),
            gasLimit: ethers.utils.hexlify(21000), // standard gas limit for ETH transfer
        };

        const txResponse = await wallet.sendTransaction(transaction);
        await txResponse.wait(); // wait for the transaction to be mined
        alert(`Transaction successful: ${txResponse.hash}`);
    };

    return (
        <div>
            <button onClick={addWallet}>Add ETH wallet</button>

            {addresses.map((p, index) => (
                <div key={index}>
                    Eth - {p}
                </div>
            ))}

            {addresses.length > 0 && (
                <div>
                    <h3>Transfer Ethereum</h3>
                    <input type="text" placeholder="Recipient Address" id="recipient" />
                    <input type="number" placeholder="Amount in ETH" id="amount" />
                    <button onClick={() => sendEthereum(
                        document.getElementById('recipient').value,
                        document.getElementById('amount').value
                    )}>Send ETH</button>
                </div>
            )}
        </div>
    );
};
