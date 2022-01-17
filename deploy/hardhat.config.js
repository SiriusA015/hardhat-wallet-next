require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const RINKEBY_API_KEY = process.env.RINKEBY_API_KEY;
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const MUMBAI_API_KEY = process.env.MUMBAI_API_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 4
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 80001
    },
  },
  solidity: "0.7.4",
  etherscan: {
    apiKey: {
      rinkeby: RINKEBY_API_KEY,
      polygonMumbai: MUMBAI_API_KEY,
    }
  }
};