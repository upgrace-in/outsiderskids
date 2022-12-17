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
    "0xe4EC89bc7E052d0394eeA27EEF44DAe6a3F704e2",
    "0x694EC93388b932398615331B8cE1CAaB7eE9Cfe3",
    "0x04c63D8c2fc9DD602aeE46F12083af1DdE69C713"
  ]

  const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  // Get the RootHash
  const rootHash = merkleTree.getRoot().toString('hex');
  console.log(rootHash)

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
