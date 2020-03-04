const KeyRing = require('eth-hd-keyring') //Installed from Brave's fork at github.com/brave/eth-hd-keyring

const help = "Usage: node convert.js my twenty four word phrase ..."

const mnemonicArgs = process.argv.slice(2);
if (mnemonicArgs.length !== 24) {
  console.log(help)
  process.exit(1)
}

const mnemonic = mnemonicArgs.join(" ")
const kr = new KeyRing({mnemonic: mnemonic});

kr.addAccounts().then((w)=> {
  console.log("Getting Private Key for: ", mnemonic)
  console.log("Brave Wallet ID: ", w[0]);
  console.log("Private key: ", kr.root.deriveChild(0)._hdkey._privateKey.toString('hex'))
})
