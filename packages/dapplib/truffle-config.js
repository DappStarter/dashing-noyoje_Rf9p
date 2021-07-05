require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note rifle upset hunt farm equal genre'; 
let testAccounts = [
"0xd73bffb6b84d085c11cdc42b19584187f1a856288f635808c0195043fbc894b5",
"0xf4beac39253fa4aa7557a74f8fc9bfa501a185c2f823f16fd3c97f2e7a875a16",
"0x0825558eff3d8af7319de97054d6a54397422ae49f0b842d5cba56d6f7ea62f2",
"0x93947e9954e4d9c4313568941383f66e11323831aeb39f893dea21d38edba129",
"0x31e042c452cfaae9cfb40e8d3a64a58ce79169906813f9fac741c55e842ed12d",
"0x47d4fa2d86a1f6791c962e6743fbef2ef4f48da74edc2de652de8fe0e6d7ead2",
"0xfed6deeebb62495f41038a2fca96a23596530e42206d5381c5eac7855a4a01a1",
"0x0391ae8fc592737eba3fb20c087d8a21f4dae2ee3dc9cdcaae03e0729feb7d03",
"0x01f038ceb0b8a46466fcd464283ef79e840ab6a6dddbed2206bb3ea5935fffdd",
"0xbd8a4056e69154cc1149bcb0d91ab590949536fac47060cb10969ee8772eb9b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

