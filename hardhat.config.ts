// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

const MAINNNET_URL = process.env.MAINNNET_URL;

const URL = process.env.URL;

const KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: MAINNNET_URL,
      },
    },
    sepolia: {
      url: URL,
      accounts: [KEY],
    },
    mumbai: {
      url: URL,
      accounts: [KEY],
    },
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};
