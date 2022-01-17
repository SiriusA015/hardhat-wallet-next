const hre = require("hardhat");
async function main() {

  const Ballot = await hre.ethers.getContractFactory("Ballot");
  const ballot = await Ballot.deploy();
  await ballot.deployed();
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

