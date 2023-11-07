// WalletBalance.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const WalletBalance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const loadBalance = async () => {
      // Check if Web3 is available
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request access to the user's accounts
          await window.ethereum.enable();
          // Get the selected account
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
          // Get the balance of the selected account
          const weiBalance = await web3.eth.getBalance(account);
          const etherBalance = web3.utils.fromWei(weiBalance, 'ether');
          setBalance(etherBalance);
        } catch (error) {
          console.error('Error connecting to Metamask:', error);
        }
      }
    };

    loadBalance();
  }, []);

  return (
    <div>
      <h2>Your Wallet Balance:</h2>
      {balance ? `${balance} ETH` : 'Loading...'}
    </div>
  );
};

export default WalletBalance;
