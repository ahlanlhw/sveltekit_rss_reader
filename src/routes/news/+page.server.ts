
import { XMLParser } from 'fast-xml-parser';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    // const data = getData() 
    const parser = new XMLParser();
    const url = 'https://cointelegraph.com/rss';
    // example consuming code
    // const body = await parseRSS(
    //   url
    // );
    const response = await fetch(url)
    .then((res)=>res.text())
    .then((rawXML)=>parser.parse(rawXML).rss.channel.item)
    console.log(response);
    // const body = await res.json();
    // console.log(typeof({res}));
    return {response};
}
