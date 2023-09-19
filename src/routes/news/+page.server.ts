
import { XMLParser } from 'fast-xml-parser';
// import SearchBar from '$lib/SearchBar.svelte';
import newsSource from '$lib/newsSource.json';
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const newsFeed = await runParser();

    const signals = await get_url_data("https://api.spotonchain.com/api/onchain/get_monitor_tokens");
    // console.log(signals);
    signals.response.data.monitor_tokens.sort(function(a:any,b:any){
        return b.smart_money_flow_usd - a.smart_money_flow_usd  ;
    })
    const output = {
        "news":{newsFeed},
        "onchain_signal":{signals},
    };
    return {output};
}
async function get_newsArticles(url:string){
    const parser = new XMLParser();
    const response = await fetch(url)
    .then((res)=>res.text())
    .then((rawXML)=>parser.parse(rawXML).rss.channel.item)
    // response.forEach(v=>{});
    
    return {response};
}

async function get_url_data(url:string){
    const response = await fetch(url)
    .then((res)=> res.json());
    // console.log(response);
    return {response};
}

async function runParser(){
    const newsFeed =[];
    for (const k in newsSource){
        const feed = await get_newsArticles(newsSource[k]);
        if(k==='FX Street Crypto'){           
                feed.response.forEach(v=>{v.source=k,v.utcTime=v['a10:updated'].toLocaleString('US')});
        }
        else {
            feed.response.forEach(v=>{v.source=k,v.utcTime=v.pubDate.toLocaleString('US')});
        }
        newsFeed.push(...feed.response.slice(0,20));
    }
    newsFeed.sort(function(a:any,b:any){
        return new Date(b.utcTime).getTime() - new Date(a.utcTime).getTime();
    })
    return {newsFeed};}