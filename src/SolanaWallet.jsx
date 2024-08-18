import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";
import nacl from "tweetnacl";

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    const [privateKey, setPrivateKey] = useState(null);

    const addWallet = () => {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        setPrivateKey(secret);
        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
    };

    const sendSolana = async (recipient, amount) => {
        const connection = new Connection("https://api.mainnet-beta.solana.com");
        const senderKeypair = Keypair.fromSecretKey(privateKey);
        const recipientPublicKey = new PublicKey(recipient);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: senderKeypair.publicKey,
                toPubkey: recipientPublicKey,
                lamports: amount * 1e9, // converting SOL to lamports
            })
        );

        const signature = await connection.sendTransaction(transaction, [senderKeypair]);
        await connection.confirmTransaction(signature);
        alert(`Transaction successful: ${signature}`);
    };

    return (
        <div>
            <button onClick={addWallet}>Add Solana wallet</button>

            {publicKeys.map((p, index) => (
                <div key={index}>
                    {p.toBase58()}
                </div>
            ))}

            {publicKeys.length > 0 && (
                <div>
                    <h3>Transfer Solana</h3>
                    <input type="text" placeholder="Recipient Address" id="solRecipient" />
                    <input type="number" placeholder="Amount in SOL" id="solAmount" />
                    <button onClick={() => sendSolana(
                        document.getElementById('solRecipient').value,
                        document.getElementById('solAmount').value
                    )}>Send SOL</button>
                </div>
            )}
        </div>
    );
}
