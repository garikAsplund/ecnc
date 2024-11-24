<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col w-full">
	<Nav />

	<div class="w-full flex flex-col items-center relative">
	{@render children()}
    </div>

	<Footer />
</main>