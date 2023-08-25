<script>
	import {escapeHtml} from '$lib/utils';
    /** @type {import('./$types').PageData} */
    export let data;
</script>
<div class='flex flex-wrap m-3 p-3 h-screen w-screen overscroll-y-none'>
    <div class='h-3/4 p-3 overflow-y-scroll'>
        {#each data.response as k}
        <div class = "border-t border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 rounded-t lg:rounded-t rounded-b lg:rounded-b lg:rounded-r m-3 p-3 flex flex-col justify-between leading-normal">
            <ol type ='1' class ='p-3'>
                <li>
                    <div>
                        <a class = 'text-lg' href={k.link}>{escapeHtml(k.title)}</a>
                        <p class = 'text-xs'>{k.pubDate}</p>
                        <span class='text-xs break-words'>
                            {escapeHtml(k.description.replace( /(<([^>]+)>)/ig, ''))}
                        </span> 
                    </div>
                </li>
            </ol>    
        </div>
        {/each}
    </div>
    <!-- <div>
        <iframe title="Libsyn Player" style="border: none" src="//html5-player.libsyn.com/embed/episode/id/27797622/height/90/theme/custom/thumbnail/yes/direction/forward/render-playlist/no/custom-color/000000/" height="90" width="100%" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
    </div> -->

</div>
