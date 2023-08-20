
<script>
// import qs from 'qs';
import {SWAP_API_KEY} from '$env/static/private';
const swap_network = 'https://base.api.0x.org/'
// const swap_network = 'https://api.0x.org'
const params = {
    // Not all token symbols are supported. The address of the token can be used instead.
    sellToken: '0x71e8f538f47397cd9a544041555cafc7a0ce9ae3', //$BOOST
    buyToken: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', //WETH
    // Note that the DAI token uses 18 decimal places, so `sellAmount` is `100 * 10^18`.
    sellAmount: '100000000000000000000',
};

// const headers = {`0x-api-key: ${JSON.stringify(process.env.0X_SWAP_API_KEY}`)};
console.log(SWAP_API_KEY)

// const response = await fetch(
//     `${swap_network}/swap/v1/quote?${qs.stringify(params)}`, { headers }
// ); // Using the global fetch() method. Learn more https://developer.mozilla.org/en-US/docs/Web/API/fetch

// console.log(await response.json());
   

</script>
