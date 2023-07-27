// scripts/deploy.js
async function main() {
   const symbol = "MNLA"
   const name = "Manilla Finance"
   const adminAccount = "0x161e1BA0b5884A8331D497d7f5a398688D309f62"
   const Manilla = await ethers.getContractFactory("Manilla");
   const amount = 1 * Math.pow(10, 27)
   const manilla = await Manilla.deploy(name, symbol, amount, adminAccount);
   await manilla.deployed();
 
   console.log("Manilla Token deployed to:", manilla.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch((error) => {
     console.error(error);
     process.exit(1);
   });
 