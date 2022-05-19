import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'

const WalletCardEthers = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);

 const checkChain = async ()=> {
  const { chainId } = await new ethers.providers.Web3Provider(window.ethereum).getNetwork()
  if (chainId !== 80001) {
    console.log('hellos')
    switchChain()
  }
  console.log(chainId) // 42
}

const switchChain = async () => {
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{
      chainId: "0x13881",
      chainName: "Polygon Mumbai",
      rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
      nativeCurrency: {
        name: "Matic",
        symbol: "Matic",
        decimals: 18,
      },
      blockExplorerUrls: ["https://mumbai.polygonscan.com"],
    }],
  });
  connectWalletHandler()
}
	const connectWalletHandler = async () => {
		if (window.ethereum && defaultAccount == null) {
			// set ethers provider
			await setProvider(new ethers.providers.Web3Provider(window.ethereum));
      checkChain();
			// connect to metamask
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				setConnButtonText('Connected');
				setDefaultAccount(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else if (!window.ethereum){
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

  const adrr =(account) => {
    let accounts = "" 
    if (account == null) {
      accounts = "";
      return account;
    }
    accounts = `${account?.slice(0, 5)}...${account?.slice(account?.length - 4)}`;
    return accounts
  }
	
	return (
		<div class='text-white rounded'>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div class='accountDisplay'>
				<h3>{adrr(defaultAccount)}</h3>
			</div>
			{errorMessage}
		</div>
	);
}

export default WalletCardEthers;