const hre = require("hardhat");
async function main() {
  const Register = await hre.ethers.getContractFactory("Register");
  const register = await Register.deploy();
  await register.deployed();
  console.log(register.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

