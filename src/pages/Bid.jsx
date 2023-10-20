import React, { useContext, useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";
import mon from "../assets/mon.png";
import EthereumContext from "../EthereumContext";
import { contractAddress, abi } from ".././contractDetails";
import { ethers, parseEther } from "ethers";
import backg from "../assets/bg.png";
import { Link, useParams } from "react-router-dom";

const Bid = () => {
  const id = useParams();
  const [url, setUrl] = useState(0);
  
  const [inputValue, setInputValue] = useState('');

  const videoURLs = [
    "https://gateway.lighthouse.storage/ipfs/QmcmtjUFahJ9PJVNNh2XKzCtoXtk31rLf1iJRCQw44Qi45",
    "https://gateway.lighthouse.storage/ipfs/Qme3hUTtcKieaPDXiCBmBy1uBD6Z7UCzPQi9aCNAGPrLwZ",
    "https://gateway.lighthouse.storage/ipfs/QmRYumFAwz35T6oGjiqxXMdfeZQ321GauzP8i7U78uvb8k",
    "https://gateway.lighthouse.storage/ipfs/Qmf3fyKxWZzM9Az5ENM68BXFZ6nJ6EvzbaHzRSqbJmcpbv",
    "https://gateway.lighthouse.storage/ipfs/QmPeU59rzbUEMVgoLRmoqDL9EXVJpVhnCKm585624CfQZ8",
    "https://gateway.lighthouse.storage/ipfs/QmU6udh7yHptS25prb64LHyd26uveMW7Mbj55MCo3oyrYP",
  ];

  const [nft, setNft] = useState([]);
  let nftData = [
    {
        "index": 0,
        "title": "wicket",
        "description": "Wicket Beautifully taken by Shami",
        "tags": ["cricket", " asia cup", " bowled", " "],
        "attributes": [
            {"trait_type": "Event", "value": "asia cup"},
            {"trait_type": "Year", "value": 2023},
            {"trait_type": "Player", "value": "Babar"},
            {"trait_type": "Team", "value": "Bangladesh"}
        ],
        "media": {
            "url": "https://gateway.lighthouse.storage/ipfs/QmcmtjUFahJ9PJVNNh2XKzCtoXtk31rLf1iJRCQw44Qi45"
        },
        "royalties": [
            {"beneficiary": "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f", "rate": "10%"}
        ]
    },
    {
        "index": 1,
        "title": "four",
        "description": "An Energetic Boundary Shot",
        "tags": ["cricket", " asia cup", " four"],
        "attributes": [
            {"trait_type": "Event", "value": "asia cup"},
            {"trait_type": "Year", "value": 2023},
            {"trait_type": "Player", "value": "Kolhi"},
            {"trait_type": "Team", "value": "India"}
        ],
        "media": {
            "url": "https://gateway.lighthouse.storage/ipfs/QmRYumFAwz35T6oGjiqxXMdfeZQ321GauzP8i7U78uvb8k"
        },
        "royalties": [
            {"beneficiary": "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f", "rate": "10%"}
        ]
    },
    {
        "index": 2,
        "title": "four",
        "description": "An Energetic Boundary Shot",
        "tags": ["cricket", " asia cup", " four"],
        "attributes": [
            {"trait_type": "Event", "value": "asia cup"},
            {"trait_type": "Year", "value": 2023},
            {"trait_type": "Player", "value": "Shaqib"},
            {"trait_type": "Team", "value": "Bangladesh"}
        ],
        "media": {
            "url": "https://gateway.lighthouse.storage/ipfs/Qme3hUTtcKieaPDXiCBmBy1uBD6Z7UCzPQi9aCNAGPrLwZ"
        },
        "royalties": [
            {"beneficiary": "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f", "rate": "10%"}
        ]
    },
    {
        "index": 3,
        "title": "four",
        "description": "An Energetic Boundary Shot",
        "tags": ["cricket", " asia cup", " four"],
        "attributes": [
            {"trait_type": "Event", "value": "asia cup"},
            {"trait_type": "Year", "value": 2023},
            {"trait_type": "Player", "value": "Babar"},
            {"trait_type": "Team", "value": "Bangladesh"}
        ],
        "media": {
            "url": "https://gateway.lighthouse.storage/ipfs/QmPeU59rzbUEMVgoLRmoqDL9EXVJpVhnCKm585624CfQZ8"
        },
        "royalties": [
            {"beneficiary": "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f", "rate": "10%"}
        ]
    },
    {
        "index": 4,
        "title": "six",
        "description": "In the air",
        "tags": ["cricket", " asia cup", " six"],
        "attributes": [
            {"trait_type": "Event", "value": "asia cup"},
            {"trait_type": "Year", "value": 2023},
            {"trait_type": "Player", "value": "Gill"},
            {"trait_type": "Team", "value": "India"}
        ],
        "media": {
            "url": "https://gateway.lighthouse.storage/ipfs/Qmf3fyKxWZzM9Az5ENM68BXFZ6nJ6EvzbaHzRSqbJmcpbv"
        },
        "royalties": [
            {"beneficiary": "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f", "rate": "10%"}
        ]
    },
    {
        "index": 5,
        "title": "Wicket",
        "description": "Wicket Beautifully taken by Siraj caught by Ishan",
        "tags": ["cricket", " asia cup", " catch out "],
        "attributes": [
            {"trait_type": "Event", "value": "asia cup"},
            {"trait_type": "Year", "value": 2023},
            {"trait_type": "Player", "value": "Siraj"},
            {"trait_type": "Team", "value": "India"}
        ],
        "media": {
            "url": "https://gateway.lighthouse.storage/ipfs/QmU6udh7yHptS25prb64LHyd26uveMW7Mbj55MCo3oyrYP"
        },
        "royalties": [
            {"beneficiary": "0x94E71CfEB2c0275FFbFfF6E214Cc9cDbd75a971f", "rate": "10%"}
        ]
    }
]


  useEffect(() => {
    // You can change this index to point to the desired URL from the videoURLs array
    console.log(id.id);
    console.log(nftData[parseInt(id.id)]);
    setNft(nftData[parseInt(id.id-1)])

    return setUrl(videoURLs[parseInt(id.id-1)]);

  }, []);


  const contractCall = async () => {
    //connectToMetaMask()
    console.log("entered");

  

    
      console.log("entered");

      try {
      

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const amount = parseInt(inputValue);

        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(contract)
        const tx = await contract.placeBid(1, {value:inputValue});
        await tx.wait()

        console.log(tx)



        try {
          const tx = await contract.ownerOf(0); // Assuming the function to stake tokens is named 'stake' and takes the amount as a parameter
        //   console.log("Staking initiated, transaction hash:", tx.hash);
          // await tx.wait();
        //   console.log("Staking confirmed");
        console.log(tx)
        } catch (error) {
          console.error("Error occurred:", error);
        }
      } catch (error) {
        console.error("Error calling contract function:", error);
      }
      console.log("over here");
    }

  return (
    <>
      <Header />

      <div className="bid-container">
        <div className="video-section">
          <video
            width="700"
            height="350"
            src={url} // Make sure this is the correct URL for the video, not just a thumbnail
            autoPlay
            muted
            loop
          />
        </div>
        <div className="content-section">
          <div className="inner-content">
          <div className="inner-text-1">
          Wicket Beautifully taken by Siraj caught by Ishan
          </div>
            <div className="inner-text"></div>
            <div className="inner-text"></div>
            <div className="inner-text"></div>
            <input 
        type="text" 
        value={inputValue} 
        onChange={(e)=>{setInputValue(e.target.value);}} 
      />
            <div
             className="button-2" onClick={contractCall}> Bid 
            </div>
           

          </div>

         
           
        
          {/* You can add content here for the right-side section */}
        </div>
      </div>
    </>
  );
};

export default Bid;
