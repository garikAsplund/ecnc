<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col w-full">
	<Nav />

	<div class="w-full flex flex-col items-center relative {$page.url.pathname === '/' ? '' : 'pt-12'}">
	{@render children()}
    </div>

	<Footer />
</main>