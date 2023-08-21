<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data.response)
</script>
<div class='grid v-screen place-items-center p-3'>
    {#each data.response as k}
    <ol type ='1' class ='p-1'>
        <li>
            <a href={k.link}>{k.title}</a>
        </li>
    </ol>    
    {/each}
</div>
