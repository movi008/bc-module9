// ...
const loadBalance = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request access to the user's accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Specify the network (e.g., Rinkeby)
      await window.ethereum.request({ method: 'eth_chainId', params: ['0x4'] });
      // Get the selected account
      const accounts = await web3.eth.getAccounts();
      // ...
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  }
};
// ...
