<script>
    import { ethers } from 'ethers';
    // place holder for the properties we will be passing between components
    export let web3Props = { provider: null, signer: null, account: null, chainId: null };
    // // new variable for the contract address
    // export let contractAddr = '';
    // // new variable for the contract ABI
    // export let contractAbi = { abi: null };

    // connect the wallet
    async function connectWallet() {
        let provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        const chainId = await signer.getChainId();
        // new contract variable
        // const contract = new ethers.Contract(contractAddr, contractAbi.abi, signer);
        // new value for contract
        web3Props = { signer, provider, chainId, account };
        console.log(web3Props);
    }

</script>

<button on:click={connectWallet} class='btn btn-primary rounded-full p-3'>
    Connect Wallet
</button>