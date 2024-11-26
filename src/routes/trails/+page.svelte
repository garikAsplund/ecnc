<script>
    let showMap = $state(false);
</script>

<div class="flex w-full flex-col items-center">
    <p class="pb-12">Click <a href="/ECNC_2024.pdf" target="_blank" aria-label="Trail map" class="underline underline-offset-1 hover:opacity-75">here</a> for a PDF of our trails.</p>
    
    <div class="relative w-2/3 h-[60vh]">
        {#if !showMap}
            <button class="relative cursor-pointer w-full h-full" onclick={() => showMap = true}>
                <enhanced:img
                    src="/static/lazy-caltopo.png"
                    alt="XC ski trails in Wallowa County"
                    class="h-full w-full object-cover"
                />
                <div
                    class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                    <div class="rounded-lg bg-white px-4 py-2 text-gray-800 shadow">
                        Click to load interactive map
                    </div>
                </div>
            </button>
        {/if}
        
        <iframe
            src="https://caltopo.com/m/LA015BN"
            title="XC ski trails in Wallowa County"
            class="h-full w-full border-0 {!showMap ? 'invisible' : ''}"
        ></iframe>
    </div>
</div>