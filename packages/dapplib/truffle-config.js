require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stomach deny noise concert hunt creek equal general'; 
let testAccounts = [
"0x2b111e4c03fa1a939c2ef7eb0713fe5a425ef4a65e1921e1bebb52ed7308a314",
"0xc8602c8f336e84b8cc583f3e02ca8289eb0a7b826bfd1dab46a9583846f0f442",
"0x981c08040914d66dd3b5d71712d6353f4f3be660aba42a593ffc59661e5522b3",
"0x1efb01dd4652c74c341cb2657afb60478ba050635f6e9c338899d28f368e35e5",
"0xd4fbc2ca7cb7763adeec2b3e926f12502ed6141d17e88a630e29916ef5b51123",
"0xd9fed15be06fdde8971ffb12ddd867dfb9bd1a380af20ee61f853e4253579d50",
"0xad17c4f01321d2f81352c3f3a80fc083b659a19f372b01013a775c8cb76e348e",
"0x8c1ed12d5f561b387b73c428521edcad73654a94386643e2934b4e2b87e6df00",
"0x7aee1e316d727bf83928a02b46d5addb14277040dde5e80696543c2723141a3e",
"0x74b0e809e25283cd50ad27267ac3cb0a7695a84e865a344ee986b3be5846f8b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


