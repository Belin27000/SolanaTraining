import { Keypair } from "@solana/web3.js"
import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers"

//const keypair = Keypair.generate();
console.log(`✅Generate keypair`);
//console.log(`The public key is: `, keypair.publicKey.toBase58());
//console.log(`The secret key is: `, keypair.secretKey);
//console.log(`✅ Finished!`);
const keypairFromEnv = Keypair.fromSecretKey(
    Uint8Array.from(JSON.parse(process.env.SECRET_KEY || "[]"))
);
console.log("test");

console.log("✅ Keypair loaded successfully!", keypairFromEnv.publicKey.toBase58());
