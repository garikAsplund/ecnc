<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/SVGs/Logo.svelte';
	import Facebook from '$lib/SVGs/Facebook.svelte';
</script>

<nav class="{$page.url.pathname === '/' ? 'fixed backdrop-blur-md' : 'sticky bg-white'} top-0 z-40 w-full font-bold md:pb-4" id="nav" aria-label="Main navigation">
	<div class="relative flex w-full items-center justify-between md:pt-8 p-4 xl:px-16  md:px-12">
		<div class="flex items-center">
			<a
				href="/"
				aria-label="Home"
				class="hidden items-center gap-4 xl:text-5xl lg:text-3xl font-thin hover:opacity-75 lg:flex "
			>
				<Logo size={64} />
				Eagle Cap Nordic Club
			</a>
			<a
				href="/"
				aria-label="Home"
				class="flex items-center gap-2 text-5xl font-thin hover:opacity-75 lg:hidden"
			>
				<Logo size={48} />
				ECNC
			</a>
		</div>
		<!-- <a
			href="/"
			aria-label="Home"
			class=" absolute left-1/2 mt-8 hidden -translate-x-1/2 transform items-center text-4xl hover:opacity-75 md:flex md:scale-75 lg:scale-100"
			aria-current={$page.url.pathname === '/' ? 'page' : undefined}
		>
			<span class="-translate-y-4">Eagle Cap</span>
			<Logo />
			<span class="-translate-y-4">Nordic Club</span>
		</a> -->
		<div class="md:flex items-center xl:space-x-4 lg:space-x-2 hidden md:scale-75 lg:scale-100">
			<a
				href="/about"
				class="p-2 text-2xl hover:opacity-75 {$page.url.pathname === '/about' ? 'underline underline-offset-8' : ''}"
				aria-label="About"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				About
			</a>
			<a
				href="/access"
				class="p-2 text-2xl hover:opacity-75 {$page.url.pathname === '/access' ? 'underline underline-offset-8' : ''}"
				aria-label="Frequently asked questions"
				aria-current={$page.url.pathname === '/access' ? 'page' : undefined}
			>
				Access
			</a>
			<a
				href="/weather"
				class="p-2 text-2xl hover:opacity-75 {$page.url.pathname === '/weather' ? 'underline underline-offset-8' : ''}"
				aria-label="Weather"
				aria-current={$page.url.pathname === '/weather' ? 'page' : undefined}
			>
				Weather
			</a>
			<a
			href="/events"
			class="p-2 text-2xl hover:opacity-75 {$page.url.pathname === '/events' ? 'underline underline-offset-8' : ''}"
			aria-label="Events"
			aria-current={$page.url.pathname === '/events' ? 'page' : undefined}
		>
			Events
		</a>
			<a
				href="https://www.paypal.com/donate/?hosted_button_id=55ZANLU8A2UPA"
				rel="noopener noreferrer"
				target="_blank"
				aria-label="Donate"
				class="p-2 text-2xl hover:opacity-75 md:p-2 md:px-4 border-2 border-black"
			>
				Donate
			</a>
			<a
				href="https://www.facebook.com/groups/1441033243294741"
				target="_blank"
				rel="noopener"
				class=" p-2 hover:opacity-75 md:p-2"
			>
				<Facebook />
			</a>
		</div>
	</div>
</nav>
