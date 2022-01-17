const hre = require("hardhat");
async function main() {
  const MainContract = await hre.ethers.getContractFactory("MainContract");
  const mainContract = await MainContract.deploy();
  await mainContract.deployed();
  console.log(mainContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

