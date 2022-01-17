const hre = require("hardhat");
async function main() {
  const Owner = await hre.ethers.getContractFactory("Owner");
  const owner = await Owner.deploy();
  await owner.deployed();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

