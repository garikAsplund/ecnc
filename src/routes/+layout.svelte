<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';
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

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col w-full">
	<Nav />

	<div class="w-full flex flex-col items-center relative {$page.url.pathname === '/' ? '' : 'pt-12'}">
	{@render children()}
    </div>

	<Footer />
</main>