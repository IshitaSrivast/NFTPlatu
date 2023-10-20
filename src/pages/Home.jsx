import React, { useContext, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import mon from "../assets/mon.png";
import EthereumContext from "../EthereumContext";
import { contractAddress, abi } from ".././contractDetails";
import { ethers } from "ethers";
import backg from "../assets/bg.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { account, contract } = useContext(EthereumContext);
  const [inputValue, setInputValue] = useState("");

  




  const videoData = [
    {
      id: 1,
      thumbnailUrl: "https://gateway.lighthouse.storage/ipfs/QmNUuMrVfD3SBmMuJv5dhmkd84kKeApo1QSayumhuDE84Q",
    },
    {
      id: 2,
      thumbnailUrl: "https://gateway.lighthouse.storage/ipfs/QmTA9dbV1Ghy21AUjy5nN53b98NZQiHKrDrR2YJ1ZbqWx7",
    },
    {
      id: 3,
      thumbnailUrl: "https://gateway.lighthouse.storage/ipfs/QmVFuFBUzY5pCfYEcyrPntTquMt7Cd3ThJDZTmwLm1kiUm",
    },
    {
      id: 4,
      thumbnailUrl: "https://gateway.lighthouse.storage/ipfs/QmS6Y249qczgRb5nzJgv379cLcGKBL5Uxezg3BYPcuqouF",
    },
    {
      id: 5,
      thumbnailUrl: "https://gateway.lighthouse.storage/ipfs/QmUzneXFxAaFPUdNYPwQPxi2ppzghgrZDnZMW8wY22pztn",
    },
    {
      id: 6,
      thumbnailUrl: "https://gateway.lighthouse.storage/ipfs/QmPzJ5PnN2uXQerTeY42LjPwioDc36hrsS6wnMtqbrFx2x",
    },
];


  const callContractFunction = async () => {
    //connectToMetaMask()

    if (contract) {
      console.log("entered");

      try {
        // Call a function on the contract
        const tokenAddress = "0x64DE202c43c0C2F666222E8bF327eA1f280d9948";

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const amount = parseInt(inputValue);

        const tokenContract = new ethers.Contract(
          tokenAddress,
          [
            "function approve(address spender, uint256 amount) external returns (bool)",
          ],
          signer
        );
        const approveTx = await tokenContract.approve(contractAddress, amount);
        await approveTx.wait();
        console.log(approveTx);

        try {
          const tx = await contract.stake(amount); // Assuming the function to stake tokens is named 'stake' and takes the amount as a parameter
          console.log("Staking initiated, transaction hash:", tx.hash);
          await tx.wait();
          console.log("Staking confirmed");
        } catch (error) {
          console.error("Error occurred:", error);
        }
      } catch (error) {
        console.error("Error calling contract function:", error);
      }
      console.log("over here");
    }
    // else{

    //   if (window.ethereum) {
    //     try {

    //       const provider = new ethers.BrowserProvider(window.ethereum);

    //       const acc = await provider.listAccounts();

    //       const signer = await provider.getSigner();
    //       console.log(signer);
    //       console.log(abi);
    //       console.log(contractAddress)
    //       // Create a contract instance
    //       const contrac = new ethers.Contract(contractAddress, abi, signer);
    //       console.log(contrac)

    //       try {
    //         // Call a function on the contract
    //         console.log(contrac)
    //         console.log(account)
    //         const result = await contrac.getStakerInfo(acc[0]);

    //        // const result = await contract.functionName(); // Replace with your contract's function name
    //         console.log("Function Result:", result);
    //       } catch (error) {
    //         console.error("Error calling contract function:", error);
    //       }
    //       console.log("over here")

    //       alert("connected to the metamask");
    //     } catch (error) {
    //       console.error("Error connecting to MetaMask:", error);
    //     }
    //   } else {
    //     console.error("MetaMask not found");
    //   }

    // }
  };
  const unstakeTokens = async () => {
    if (contract) {
      // Replace with your staking contract address and ABI

      // Call the unstake function on the contract
      try {
        const tx = await contract.unstake(); // Assuming the function to unstake tokens is named 'unstake' and doesn’t require any parameters
        console.log("Unstaking initiated, transaction hash:", tx.hash);
        await tx.wait();
        console.log("Unstaking confirmed");
      } catch (error) {
        console.error("Error occurred:", error);
      }
    } else {
      console.error("Please connect to MetaMask");
    }
  };

  const claimTokens = async () => {
    if (contract) {
      // Replace with your staking contract address and ABI

      // Call the unstake function on the contract
      try {
        const tx = await contract.claimRewards(); // Assuming the function to unstake tokens is named 'unstake' and doesn’t require any parameters
        console.log("Unstaking initiated, transaction hash:", tx.hash);
        await tx.wait();
        console.log("Unstaking confirmed");
      } catch (error) {
        console.error("Error occurred:", error);
      }
    } else {
      console.error("Please connect to MetaMask");
    }
  };

  return (
    <>
      <Header />
      
      <div style={{ backgroundColor: "black" }} class="cover">
        <div className="inner-box">
          <div className="inner-box-w">
            <img src={backg}></img>
          </div>
        </div>
        {/* <hr className="f"/> */}
        {/* <div className="heading">
        
          <h1>NFTs</h1>
        </div> */}
        <div className="video-list">
          {videoData.map((video) => (
            <Link to={`/bid/${video.id}`}>
            <div className="card" key={video.id}>
              
                <img
                  width="400"
                  height="250"
                  src={video.thumbnailUrl} // Make sure this is the correct URL for the video, not just a thumbnail
                  title={`Video ${video.id }`}
                  autoPlay
                  muted
                  loop
                />
            </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

{
  /* <div className="">
       
      <div className="card">
        <h2>109.32%</h2>
        <p>%APY</p>
        <div className="icon"><img src="path_to_your_icon.png" alt="icon" /></div>
        <h3>My Funds</h3>
        <p>WMatic Staked</p>
        <h4>0.0000 WMatic</h4>
        <p>Available: 55.762366 WMatic</p>
        <button>Stake</button>
        <button>Unstake</button>
      </div>

      <div className="card">
        <h2>4,486,272 WMatic</h2>
        <p>Total WMatic Staked</p>
        <h2>$328,000.00</h2>
        <p>Staked Value</p>
        <div className="icon"><img src="path_to_your_icon.png" alt="icon" /></div>
        <h3>My Rewards</h3>
        <p>Unclaimed Rewards</p>
        <h4>0.0000 WMatic</h4>
        <p>Total Rewards Claimed: 1.9803 WMatic 🚀</p>
        <button>Claim Rewards</button>
      </div>
    </div> */
}
