const hre = require("hardhat");
async function main() {
  const Election = await hre.ethers.getContractFactory("Election");
  const election = await Election.deploy(["Election 0", "This is initial Election with ID = 0"], [0,1], ["Candidate0"]);
  await election.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

