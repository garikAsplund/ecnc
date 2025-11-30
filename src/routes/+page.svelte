<script lang="ts">
	import Affiliates from '$lib/Affiliates.svelte';
	import NewsletterForm from '$lib/NewsletterForm.svelte';
	import RoadStatus from '$lib/RoadStatus.svelte';
	import Event from '$lib/Event.svelte';
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let navHeight: number = $state(0);

	onMount(() => {
		let navElement = document.getElementById('nav') as HTMLDivElement | null;

		function calculateNavHeight() {
			if (navElement instanceof HTMLDivElement) {
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

<div class="relative w-full">
	<!-- Hero Section - 75vh with image -->
	<div
		class="relative -mb-[--nav-height] h-[85vh] w-full -translate-y-[--nav-height]"
		style="--nav-height: {navHeight}px;"
	>
		<enhanced:img
			src="/static/hero-lq.jpg"
			alt="Skiing area at Salt Creek Summit"
			class="absolute inset-0 -z-10 h-full w-full object-cover object-center"
			loading="eager"
			fetchpriority="high"
		/><enhanced:img
			src="/static/hero.jpg"
			alt="Skiing area at Salt Creek Summit"
			class="absolute inset-0 -z-10 h-full w-full object-cover object-center dark:brightness-75"
			loading="eager"
			fetchpriority="high"
		/>

		<!-- Hero Content -->
		<div
			class="flex h-full flex-col items-center px-8 pt-[calc(var(--nav-height)+12px)] dark:invert space-y-8"
		>
			<div class="text-center text-3xl font-semibold md:text-5xl lg:hidden">
				Eagle Cap Nordic Club
			</div>
			<h1 class="text-center text-2xl font-extralight md:text-3xl xl:text-4xl">
				Promoting cross-country skiing in Wallowa County
			</h1>
			<a
				href="https://www.facebook.com/groups/1441033243294741"
				target="_blank"
				rel="noopener"
				class="mt-4  flex w-full justify-center px-2 py-4 text-center underline underline-offset-2 hover:opacity-75 md:hidden"
			>
				See conditions on Facebook
			</a>
			<!-- <RoadStatus /> -->
			 <Event />
		</div>
	</div>

	<div class="relative w-full px-8 pb-12 ">
		<!-- <NewsletterForm {data} /> -->
	</div>
	<Affiliates />
</div>
