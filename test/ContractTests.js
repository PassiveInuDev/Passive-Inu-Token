const { expect } = require("chai");
const { ethers } = require("hardhat");


let currentToken;
let message1 = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';// '0x079f1BaC0025ad71Ab16253271ceCA92b222C614';
let message2 = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

let messageHash1 = ethers.utils.solidityKeccak256(['string'], [message1]);
let messageHash2 = ethers.utils.solidityKeccak256(['string'], [message2]);

let whitelistClaimPass = [{
    r: '0xaba336e1347616cd15fd44720fd4bb9faaf3e3cf4fe653915b4dc57229264807',
    s: '0x17eb41b6419bcd8f02e80ee9731a62eb4f073a227c088ab5010da8349eb350b3',
    v: 27
}, {
    r: '0x9b66010cdc6f118c81483c6c6179c9c1d81278c83c6e643c17bf984fdcd6b23f',
    s: '0x31c0be7e59acc24ecfea78b59996b1642891370ffd9ab5840ec877cac1286364',
    v: 27
}, {
    r: '0x76cb241964b3b20ef678aeaeccbbca0a0fba271e03c4cbf1bee3b7bcac0f1c28',
    s: '0x50499e74dc33a7d2e7eaa2f151d68e8db176fefdd266dad2c7908893fc151dc1',
    v: 27
}]


describe("NFT Pump Tests", function () {
    let buyer, owner, hashValue;

    // beforeEach(async function () {
    //     await hre.network.provider.send("hardhat_reset")
    //   })

    before(async () => {

        const [owner, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20] = await ethers.getSigners();
        console.log("Owner Address: " + owner.address);
        console.log("Owner Address: " + _1.address);
        let ethBalance = ethers.utils.formatEther(await ethers.provider.getBalance(owner.address));
        console.log("Start Balance: " + ethBalance);

        const currentContract = await ethers.getContractFactory("PassiveInu");
        currentToken = await currentContract.deploy(
            'Passive Inu Token',
            'PINU',
            '200_000_000_000_000_000'
            [
                '0xc21223249ca28397b4b6541dffaecc539bff0c59',
                '0x145677fc4d9b8f19b5d56d1820c48e0443049a30',
                '0x3f05946758b44cd6dbc02828344c361f89f2e26e',
                '0xdb2663048759fe9e4b97e12da8a623513ac74507'               
            ],
            [
                8,
                2,
                0,
                0
            ],
            [
                8,
                2,
                0,
                0
            ],
            1000000,
            0xdb2663048759fe9e4b97e12da8a623513ac74507
            );

        console.log("Deploy");
        await currentToken.deployed();

    });

    if (true) {
        it("Update Vault", async function () {
            await currentToken.setVaultAddress('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
        });        
    }
})
