<script lang="ts">
	import NewsletterForm from '$lib/NewsletterForm.svelte';
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let navHeight: number = $state(0);

	onMount(() => {
		let navElement: HTMLDivElement = document.getElementById('nav');

		function calculateNavHeight() {
			if (navElement) {
				navHeight = navElement.offsetHeight;
				// console.log(`Navigation height: ${navHeight}px`);
			}
		}
		calculateNavHeight();
		window.addEventListener('resize', calculateNavHeight);
		return () => {
			window.removeEventListener('resize', calculateNavHeight);
		};
	});
	let { data } = $props();
</script>

<div class="relative min-h-screen w-full -translate-y-[--nav-height] -mb-[--nav-height]"
style="--nav-height: {navHeight}px;"
>
	<enhanced:img
		src="/static/hero-lq.jpg"
		alt="Skiing area at Salt Creek Summit"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-center "
		loading="eager"
		fetchpriority="high"
	/><enhanced:img
		src="/static/hero.jpg"
		alt="Skiing area at Salt Creek Summit"
		class="absolute inset-0 -z-10 h-full w-full object-cover object-center dark:brightness-75"
		loading="eager"
		fetchpriority="high"
	/>
	<!-- <div class="absolute inset-0 z-20 bg-black/10"></div> -->
	<div
		class="mt-[calc(var(--nav-height)+12px)] flex min-h-[calc(100vh-5rem)] w-full flex-col items-center space-y-8 px-8 dark:invert"
		style="--nav-height: {navHeight}px;"
	>
		<div class="mb-8 text-center text-3xl font-semibold md:text-5xl lg:hidden">
			Eagle Cap Nordic Club
		</div>
		<h1 class="text-center text-2xl font-extralight md:text-3xl xl:text-4xl">
			Promoting cross-country skiing in Wallowa County
		</h1>
		<a
			href="/events"
			aria-label="Ski swap"
			class="text-center text-lg underline underline-offset-2 hover:opacity-75"
			>Check out our ski swap on Decemeber 14!</a
		>
		<a
			href="https://www.facebook.com/groups/1441033243294741"
			target="_blank"
			rel="noopener"
			class="flex w-full justify-center px-2 py-4 text-center underline underline-offset-2 hover:opacity-75 md:hidden"
		>
			See conditions on Facebook
		</a>
		<div class="flex-grow-1"></div>

		<div class="mt-auto rounded-md bg-slate-100">
			<NewsletterForm {data} />
		</div>
		<div class="mt-12 ">
        </div>
	</div>
</div>
