<script>
    /** @type {import('./$types').PageData} */
    export let data;
    // console.log(data.obj);
  </script>

<div class='place-items-center grid v-screen p-20'>
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Quick Swap</h2>
            <div class='card h-20 w-80 bg-slate-200 shadow-s'>
            {data.obj.one}
            </div>
            <div class='card h-20 w-80 bg-slate-200 shadow-s'>
            
            </div>
            <div class="card-actions justify-center">
                
            </div>
            <div class='flex flex-col items-center'>
                <button class='btn btn-secondary w-40'></button>
            </div>
        </div>
    </div>
</div>