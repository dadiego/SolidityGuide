const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode }= require('./compile');

const provider = new HDWalletProvider(
'enter mule innocent market senior evidence rich dose provide rare immune fetch',
'https://rinkeby.infura.io/v3/d4354ef977d7486e97a9922f41be4ed3'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop()
};
deploy();