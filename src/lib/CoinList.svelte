<script lang='ts'>
    const coingecko_url = "https://tokens.coingecko.com/uniswap/all.json"
    // export let tokenListJSON={
    //     name:null,
    //     tokens:null,
    // };
    async function get_tokens(){
        let res = await fetch(coingecko_url);
        let data = await res.json();
        // tokenListJSON = {data['name'],data['tokens']}
        const tokens= data['tokens']
        // for (const i in tokens){
        //     console.log(tokens[i]);
        // }
        data.tokens.map(k=>{
            console.log(k.symbol,k.address);
        })
    };
    get_tokens();
    </script>