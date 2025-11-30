<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/SVGs/Logo.svelte';
	import Facebook from '$lib/SVGs/Facebook.svelte';
</script>

<nav class="{$page.url.pathname === '/' ? 'sticky backdrop-blur-md dark:invert dark:backdrop-invert' : 'sticky bg-neutral-50'} top-0 z-40 w-full font-light md:font-bold md:pb-4" id="nav" aria-label="Main navigation">
	<div class="relative flex w-full items-center justify-between md:pt-4 p-4 xl:px-16 md:px-12">
		<div class="flex items-center">
			<a href="/" aria-label="Home" class="hidden items-center gap-4 xl:text-5xl lg:text-3xl font-thin hover:opacity-75 lg:flex">
				<Logo size={64} />
				Eagle Cap Nordic Club
			</a>
			<a href="/" aria-label="Home" class="flex items-center gap-2 text-5xl font-thin hover:opacity-75 lg:hidden">
				<Logo size={36} />
				<span class="hidden sm:block">ECNC</span>
			</a>
		</div>
		<div class="flex items-center xl:space-x-4 lg:space-x-2">
			<a href="/about" 
				class="px-2 py-4 text-sm md:text-xl lg:text-2xl hover:opacity-75 {$page.url.pathname === '/about' ? 'underline underline-offset-8' : ''}"
				aria-label="About"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				About
			</a>
			<a href="/trails"
				class="px-2 py-4 text-sm md:text-xl lg:text-2xl hover:opacity-75 {$page.url.pathname === '/trails' ? 'underline underline-offset-8' : ''}"
				aria-label="Trails"
				aria-current={$page.url.pathname === '/trails' ? 'page' : undefined}>
				Trails
			</a>
			<a href="/weather"
				class="px-2 py-4 text-sm md:text-xl lg:text-2xl hover:opacity-75 {$page.url.pathname === '/weather' ? 'underline underline-offset-8' : ''}"
				aria-label="Weather" 
				aria-current={$page.url.pathname === '/weather' ? 'page' : undefined}>
				Weather
			</a>
			<a href="/events"
				class="px-2 py-4 text-sm md:text-xl lg:text-2xl hover:opacity-75 {$page.url.pathname === '/events' ? 'underline underline-offset-8' : ''}"
				aria-label="Events"
				aria-current={$page.url.pathname === '/events' ? 'page' : undefined}>
				Events
			</a>
			<a href="https://www.paypal.com/donate/?hosted_button_id=55ZANLU8A2UPA"
				rel="noopener noreferrer"
				target="_blank"
				aria-label="Donate"
				class="px-2 py-2 text-sm md:text-xl lg:text-2xl hover:opacity-75 md:border-2 border-black">
				Donate
			</a>
			<a href="https://www.facebook.com/groups/1441033243294741"
				target="_blank"
				rel="noopener"
				class="px-2 py-4 hover:opacity-75 hidden md:block">
				<Facebook />
			</a>
		</div>
	</div>
 </nav>
