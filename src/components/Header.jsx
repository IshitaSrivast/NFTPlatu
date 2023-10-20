import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import bullet from "../assets/bullet.png";
import { contractAddress, abi } from ".././contractDetails";
import { ethers, parseEther } from "ethers";
//import React, { useContext } from 'react';
import EthereumContext from "../EthereumContext"; // Ensure correct path
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  //const [account, setAccount] = useState(null);
  //const [contract, setContract] = useState(null);
  const { account, contract, setAccount, setContract } =
    useContext(EthereumContext);

  async function connectToMetaMask() {
    if (window.ethereum) {
      try {
        const acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(acc);
        setAccount(acc[0]);
        const provider = new ethers.BrowserProvider(window.ethereum);

        // Switch to Polygon Mumbai testnet
        const account = await provider.send("wallet_switchEthereumChain", [
          { chainId: "0xa869" },
        ]);
        console.log(account)

        console.log("here is the error");
        const signer = await provider.getSigner();
        console.log(signer);
        // Create a contract instance
         const contract = new ethers.Contract(contractAddress, abi, signer);
         console.log(contract)
         const tx = await contract.ownerOf(0);
         console.log(tx)
         //await tx.wait();
     
         console.log("Bid placed successfully!");

         console.log(tx)
        // const output2 = await contract.getDetails();
        // const output3 = await contract.getTVLDetails();

        // console.log(output2);
        // console.log(output3);

        // localStorage.setItem("api", output[3]);
        // localStorage.setItem("staked", output[0]);
        // localStorage.setItem("unclaimed", output[1]);
        // localStorage.setItem("claimed", output[2]);
        // localStorage.setItem("stakedTot", output3[0]);
        // localStorage.setItem("unstakedTot", output3[1]);
        // localStorage.setItem("rewardTot", output3[2]);
        // localStorage.setItem("api", output[3]);
        // localStorage.setItem("balance", await provider.getBalance(acc[0]));

        // console.log(output);
        // setContract(contract);
        alert("connected to the metamask");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("MetaMask not found");
    }
  }

  return (
    <>
      <div className="header">
        <div style={{ width: "50%", marginLeft: "10px" }}>
          {" "}
          <img style={{ float: "left" ,height: "48px" ,width: "100px"}} src={logo}></img>
        </div>
        <div style={{ width: "50%", float: "right" }}>
          <div className="button-1">
            <span className="logo">Avalance</span>
            <button className="button" onClick={connectToMetaMask}>
              {" "}
              Connect to a wallet
            </button>
          </div>
        </div>
      </div>
      <div className="line"> </div>
    </>
  );
};

export default Header;
