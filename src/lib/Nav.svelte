<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/SVGs/Logo.svelte';
	import Facebook from '$lib/SVGs/Facebook.svelte';
</script>

<nav class="{$page.url.pathname === '/' ? 'fixed ' : 'sticky bg-white'} top-0 z-40 w-full font-bold md:pb-4" id="nav" aria-label="Main navigation">
	<div class="relative flex w-full items-center justify-between pt-8 md:px-24">
		<div class="flex items-center">
			<a
				href="/"
				aria-label="Home"
				class="hidden items-start gap-2 text-5xl font-thin hover:opacity-75 lg:flex"
			>
				<Logo size={64} />
				Eagle Cap Nordic Club
			</a>
			<a
				href="/"
				aria-label="Home"
				class="flex items-start gap-2 text-5xl font-thin hover:opacity-75 lg:hidden"
			>
				<Logo size={64} />
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
		<div class="flex items-center space-x-4">
			<a
				href="/about"
				class="p-4 text-2xl hover:opacity-75"
				aria-label="About"
				aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
			>
				About
			</a>
			<a
				href="/access"
				class="p-4 text-2xl hover:opacity-75"
				aria-label="Frequently asked questions"
				aria-current={$page.url.pathname === '/access' ? 'page' : undefined}
			>
				Access
			</a>
			<a
				href="/weather"
				class="p-4 text-2xl hover:opacity-75"
				aria-label="Weather"
				aria-current={$page.url.pathname === '/weather' ? 'page' : undefined}
			>
				Weather
			</a>
			<a
			href="/events"
			class="p-4 text-2xl hover:opacity-75"
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
				class="p-4 text-2xl hover:opacity-75 md:p-2"
			>
				Donate
			</a>
			<a
				href="https://www.facebook.com/groups/1441033243294741"
				target="_blank"
				rel="noopener"
				class=" p-4 hover:opacity-75 md:p-2"
			>
				<Facebook />
			</a>
		</div>
	</div>
</nav>
