const hre = require("hardhat");
async function main() {
  const EtherWallet = await hre.ethers.getContractFactory("EtherWallet");
  const etherWallet = await EtherWallet.deploy();
  await etherWallet.deployed();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });