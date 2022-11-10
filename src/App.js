import logo from './logo.svg';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Mint from './components/Mint';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import $ from 'jquery'
import { useEffect } from 'react';
/* eslint-disable */

const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
window.Buffer = window.Buffer || require("buffer").Buffer


function App() {

  // Merkle tree integration
  let proof
  const whitelistAddresses = [
    "0xDEF9CBc7A7b9fa1228E3FeF7BE3DA4755a602035",
    "0x53084f29F1B1d90b0fA48Ee3BE80FEc5Cfc372C0",
    "0xC293f7827F05c3A79448F2DB3642dA82fe21503e",
    "0x1e09CC990F91996b078eaFAC4E0Eb9b690C34A59",
    "0x3a142Ed85afa8d013dbfF3C52582a7Fa63cbca31",
    "0x5b362A0608B086442D8Bd84470DAafeB605B8E4b",
    "0xBCc428c02Db0b0Fb3030F3dfb66C833004aeFd71",
    "0x2caF424F1BcbEf1f1D7dF082c6b5677f0283f9d7",
    "0x04c63D8c2fc9DD602aeE46F12083af1DdE69C713"
  ]

  const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  // Get the RootHash
  const rootHash = merkleTree.getRoot().toString('hex');
  // console.log(rootHash)

  useEffect(() => {
    let checkIntern2 = setInterval(async () => {
      if (location.pathname == '/Mint') {
        clearInterval(checkIntern2)
        $('#mintNow').click(() => {
          const claimingAddress = $('#user_address').text()
          for (var i = 0; i < whitelistAddresses.length; i++) {
            if (claimingAddress === whitelistAddresses[i]) {
              const hexProof = merkleTree.getHexProof(leafNodes[i])
              proof = hexProof.toString()
              break
            } else {
              proof = null
            }
          }
          if (proof == null) {
            alert("You are not whitelisted!");
          } else {
            $('#hash_proof').html(proof)
            $('#mintNow').off()
          }
        })
      }
    }, 1000);
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mint" element={<Mint />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
