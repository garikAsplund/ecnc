<script lang="ts">
	import Facebook from "$lib/SVGs/Facebook.svelte";
</script>

<div class="relative h-screen w-full">
	<enhanced:img
		src="/static/hero-lq.jpg"
		alt="Skiing area at Salt Creek Summit"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
		loading="eager"
		fetchpriority="high"

	/><enhanced:img
		src="/static/hero.jpg"
		alt="Skiing area at Salt Creek Summit"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
		loading="eager"
		fetchpriority="high"

	/>
	<!-- <div class="absolute inset-0 z-20 bg-black/10"></div> -->
	<div class="w-full flex flex-col justify-center h-[70vh] items-center space-y-8 lg:space-y-12 px-8 lg:px-12 xl:px-16">
        <h1 class="xl:text-5xl md:text-4xl text-3xl text-center  font-extralight">Promoting cross-country skiing in Wallowa County</h1>
       <a href="/events" aria-label="Ski swap" class="text-center text-lg underline-offset-2 underline hover:opacity-75 backdrop-blur-sm">Check out our ski swap on Decemeber 14!</a>
	   <a href="https://www.facebook.com/groups/1441033243294741"
				target="_blank"
				rel="noopener"
				class="px-2 py-4 hover:opacity-75 md:hidden flex underline-offset-2 underline backdrop-blur-0 w-full text-center justify-center">
				See conditions on Facebook
			</a>
    </div>
</div>
