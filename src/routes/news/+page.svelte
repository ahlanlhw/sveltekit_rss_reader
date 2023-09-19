<script lang='ts'>
	import {escapeHtml} from '$lib/utils';
    import Marquee from "svelte-fast-marquee";
    import {updated} from '$app/stores';
    /** @type {import('./$types').PageData} */
    export let data;
    // "Bitcoin Magazine":"https://bitcoinmagazine.com/.rss/full/"
</script>
<Marquee>
    {#each data.output.onchain_signal.signals.response.data.monitor_tokens as v}
    {#if v.smart_money_flow_usd}
    <section>
        {v.symbol} <!-- {Number(v.price).toFixed(4)}<br>
        {Number(v.fresh_money_flow_usd).toFixed(0)}<br> --> {Number(v.smart_money_flow_usd).toLocaleString('en-us')} &nbsp; || &nbsp; 
    </section>
    <!-- <button class="btn btn-accent btn-outline btn-disabled"> -->
    <!-- </button> -->
    {/if}
    
    {/each}
</Marquee>
<div class='flex flex-wrap h-screen w-screen justify-center'>
    <div class='grid gap-3 md:grid-cols-auto lg:grid-cols-3 grid-flow-rows-dense auto-cols-[minmax(0,_2fr)] h-3/4 overflow-y-hidden hover:scroll-smooth max-w-screen-lg' style ='-webkit-overflow-scrolling: touch; overflow-y:scroll' data-sveltekit-reload={$updated ? "":"off"}>
    <!-- {#if data.output.news.newsFeed.newsFeed} -->
    {#each data.output.news.newsFeed.newsFeed as k}
        <article class = "h-50 border-t rounded-t border-r border-b rounded-b border-l border-gray flex-col flex leading-normal m-1">
            <block class =' text-black text-xs text-left bg-secondary p-1.5'>
                <h1>    
                    <strong>{k.source}: </strong> 
                    <a href={k.link} target ='_blank'><strong>{escapeHtml(k.title)}
                    </strong></a>
                </h1>
            </block>
            <!-- <block class='text-md text-left p-2'>
            </block> -->
            <block  class='inline-block text-xs text-left p-1.5'>
                <p class =' max-h-20 overflow-hidden'>
                    {escapeHtml(k.description.replace( /(<([^>]+)>)/ig, ''))}
                </p>
            </block>
            <block class='align-bottom align-text-bottom'>
                <p class='text-xs text-left'>
                    {new Date(Date.parse(k.utcTime)).toUTCString()}
                    <!-- {console.log(new Date(Date.parse(k.utcTime)).toUTCString())} -->
                </p>
            </block>
        </article>
    {/each}
    {console.log(data.output.onchain_signal.signals.response.data.monitor_tokens)}
    </div>
    <!-- <div>
        <iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/27797622/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/" height="90" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    </div> -->

</div>
