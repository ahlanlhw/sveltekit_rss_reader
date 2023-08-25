
import { XMLParser } from 'fast-xml-parser';

/** @type {import('./$types').PageServerLoad} */
// let newsFeed = {
//     "categories": null,

// }
export async function load() {
    // const data = getData() 
    const parser = new XMLParser();
    const url = 'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml';
    // const url = 'https://www.reutersagency.com/feed/?best-topics=business-finance&post_type=best';
    // const url = 'https://cointelegraph.com/rss';
    // const url = 'https://www.benzinga.com/markets/feed';
    // example consuming code
    // const body = await parseRSS(
    //   url
    // );
    const response = await fetch(url)
    .then((res)=>res.text())
    .then((rawXML)=>parser.parse(rawXML).rss.channel.item)
// const sorted_response = response.sort((x:String,y:String)=> Date.parse(x) - Date.parse(y.pubDate:String))
    response.sort(function(a:any,b:any){
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });
    
return {response};
}
