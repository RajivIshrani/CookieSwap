const { ethers } = require("hardhat")
require("dotenv").config({ path: ".env" })
const { COOKIE_TOKEN_CONTRACT_ADDRESS } = require("../constants")

async function main() {
    const cookieTokenAddress = COOKIE_TOKEN_CONTRACT_ADDRESS

    const exchangeContract = await ethers.getContractFactory("Exchange")

    // here we deploy the contract
    const deployedExchangeContract = await exchangeContract.deploy(
        cookieTokenAddress
    )
    await deployedExchangeContract.deployed()
    console.log("Instance Of Contract", deployedExchangeContract)
    console.log("-------------------------------------------------------------")

    // print the address of the deployed contract
    console.log("Exchange Contract Address:", deployedExchangeContract.address)
}

// Call the main function and catch if there is any error
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
