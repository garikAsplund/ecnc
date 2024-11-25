<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/Footer.svelte';
	import Nav from '$lib/Nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
  <!-- Essential Meta Tags -->
  <title>Eagle Cap Nordic Club | {$page.url.pathname === '/' ? 'Cross-Country Skiing in Wallowa County' : $page.url.pathname.replace('/', '').charAt(0).toUpperCase() + $page.url.pathname.slice(2).split('/')[0]}</title>
  <meta name="description" content="Join Eagle Cap Nordic Club for cross-country skiing and winter recreation in beautiful Wallowa County, Oregon. Building a vibrant nordic ski community in Northeast Oregon." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.eaglecapnordic.org" />
  <meta property="og:title" content="Eagle Cap Nordic Club - XC Skiing in Northeast Oregon" />
  <meta property="og:description" content="Experience backcountry cross-country skiing in stunning Wallowa County. Join our community-driven nordic ski club to explore winter recreation opportunities in Northeast Oregon's beautiful mountains." />
  <meta property="og:image" content="/static/hero.jpg" />
  <meta property="og:site_name" content="Eagle Cap Nordic Club" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://www.eaglecapnordic.org" />
  <meta name="twitter:title" content="Eagle Cap Nordic Club - XC Skiing in Northeast Oregon" />
  <meta name="twitter:description" content="Experience backcountry cross-country skiing in stunning Wallowa County. Join our community-driven nordic ski club to explore winter recreation opportunities in Northeast Oregon's beautiful mountains." />
  <meta name="twitter:image" content="/static/hero.jpg" />
</svelte:head>

<main class="flex min-h-screen flex-col w-full">
	<Nav />

	<div class="w-full flex flex-col items-center relative {$page.url.pathname === '/' ? '' : 'pt-12'}">
	{@render children()}
    </div>

	<Footer />
</main>