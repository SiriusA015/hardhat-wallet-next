const hre = require("hardhat");
async function main() {
  const Test = await hre.ethers.getContractFactory("Test");
  const test = await Test.deploy();
  await test.deployed();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });