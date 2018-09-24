# Pokemon ERC-721 App
> ERC-721 is the Ethereum standard for non-fungible tokens.

## Full working sample
This project is composed by two components:
- **Truffle project** - [repository](https://github.com/andreafspeziale/pokemon-ERC721)
- **App**

The *Truffle project* contains the smart contracts and all the tools for the contracts deployment and testing.

> Before continuing you should clone and follow th Truffle project README.<br>
> You should have a directory structure like follows:<br><br>
> *`working_dir/pokemon-ERC721`*<br>
> *`working_dir/pokemon-ERC721-app`*<br>

The *App project* contains a simple server to retrive the `Pokemon tokenURI` information and a HTML page to display and transfer the tokens and so the related Pokemons.

To quickly run the whole project
- clone and follow the readme of the Truffle project
- install [Metamask](https://metamask.io/) on your browser
- connect Metamask to your local Ethereum node launched during the Truffle project setup, it should be exposed on `http://localhost:7545`
- import into Metamask (using the private keys) the local Ethereum node accounts, the most important account is the `eth.accounts[1]` (it is the receiver of all tokens)
- clone this repository
- `$ npm i`
- `$ cd config && cp config.js.sample config.js`
- use the following as `config.js`: 
```
module.exports = {
  truffleBuildPath: '../pokemon-ERC721/build/contracts/Pokemon.json',
  networkId: 47,
}
```
- `$ npm run server:start`
- open your browser, unlock Metamask and select the previously imported eth.accounts[1]
- go to http://localhost:3000
- thats all, you should see all the Pokemon tokens that eth.accounts[1] you previously imported owns

![browser dapp sample](http://i67.tinypic.com/2qsmavk.png)

## System used
> System used during the development of the project
- node v10.9.0
- npm 6.2.0

## Install
> Install project dependencies

Command: *`$ npm i`*

## Run the server
> Run the project

Command: *`$ npm run server:start`*

## Config
The **config folder** contains a config file where you can specified the path of the `ERC721 Pokemon token build folder` and the `NetworkId` where it has been deployed.