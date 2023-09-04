<script>
	import {escapeHtml} from '$lib/utils';
    import {updated} from '$app/stores';
    /** @type {import('./$types').PageData} */
    export let data;
    // "Bitcoin Magazine":"https://bitcoinmagazine.com/.rss/full/"
</script>
<div class='flex flex-wrap h-screen w-screen  justify-center'>
    <div class='h-3/4 overflow-y-hidden hover:scroll-smooth max-w-screen-lg' style ='-webkit-overflow-scrolling: touch; overflow-y:scroll' data-sveltekit-reload={$updated ? "":"off"}>
        {#each data.newsFeed.slice(0,20) as k}
        <article class = "border-t border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 rounded-t lg:rounded-t rounded-b lg:rounded-b lg:rounded-r m-3 p-3 flex flex-col justify-between leading-normal">
            <a class = 'text-lg text-left p-1' href={k.link}><strong>{escapeHtml(k.title)}
            </strong></a>
            <p class = 'text-xs text-left p-2'>
                <strong>{k.source}</strong>; {k.utcTime}
            </p>
            <p class='text-sm break-words p-2 text-left'>
                {escapeHtml(k.description.replace( /(<([^>]+)>)/ig, ''))}
            </p>
            <!-- {#if k.category}
            <p class = 'text-s m-3 text-left'>{(k.category.slice(0,10))}</p>
            {/if} -->
        </article>
        {/each}
    </div>
    <!-- <div>
        <iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/27797622/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/" height="90" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    </div> -->

</div>
