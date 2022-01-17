const hre = require("hardhat");
async function main() {
  const Register__ = await hre.ethers.getContractFactory("Register__");
  const register = await Register__.deploy();
  await register.deployed();
  console.log(register.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

