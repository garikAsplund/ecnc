<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Essential Meta Tags -->
	<title
		>Eagle Cap Nordic Club | {$page.url.pathname === '/'
			? 'Cross-Country Skiing in Wallowa County'
			: $page.url.pathname.replace('/', '').charAt(0).toUpperCase() +
				$page.url.pathname.slice(2).split('/')[0]}</title
	>
	<meta
		name="description"
		content="Join Eagle Cap Nordic Club for cross-country skiing and winter recreation in beautiful Wallowa County, Oregon. Building a vibrant Nordic ski community in Northeast Oregon."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.eaglecapnordic.org" />
	<meta property="og:title" content="Eagle Cap Nordic Club - XC Skiing in Wallowa County" />
	<meta
		property="og:description"
		content="Experience backcountry cross-country skiing in Wallowa County. Join our community-driven Nordic ski club to explore winter recreation opportunities in our corner of paradise."
	/>
	<meta property="og:image" content="https://www.eaglecapnordic.org/hero.jpg" />
	<meta property="og:site_name" content="Eagle Cap Nordic Club" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.eaglecapnordic.org" />
	<meta name="twitter:title" content="Eagle Cap Nordic Club - XC Skiing in Wallowa County" />
	<meta
		name="twitter:description"
		content="Experience backcountry cross-country skiing in Wallowa County. Join our community-driven Nordic ski club to explore winter recreation opportunities in our corner of paradise."
	/>
	<meta name="twitter:image" content="https://www.eaglecapnordic.org/hero.jpg" />
</svelte:head>

<main class="flex min-h-screen w-full flex-col dark:invert">
	<Nav />

	<div
		class="relative flex w-full flex-col items-center {$page.url.pathname === '/' ? '' : 'pt-12 px-8'} "
	>
		{@render children()}
	</div>

	<Footer />
</main>
