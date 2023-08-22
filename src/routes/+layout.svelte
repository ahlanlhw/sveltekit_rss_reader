<script>
    import WalletConnect from "$lib/WalletConnect.svelte";
    import "../app.css";
    export let web3Props = {
        provider:null,
        signer:null,
        account:null,
        chainId:null
    };
</script>
<div class = 'flex flex-wrap grid v-screen place-items-center p-3'>
    <nav class='navbar-center'>
    <a class='p-3' href='/about'>Home</a>
    <a class='p-3' href='/news'>News</a>
    <a class='p-3' href='/swap'>Swap</a>
    <a class='p-3' href='/token'> Token list </a>
        {#if !web3Props.account}
        <WalletConnect bind:web3Props/>
        {:else}
        <button class='btn disabled-btn p-3'>Connected!</button>
        {/if}
    </nav>
</div>

<slot/>
