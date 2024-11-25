<script lang="ts">
	import { MapPin } from 'svelte-lucide';
</script>

<div class="flex w-full flex-col items-center relative">
	<enhanced:img src="/static/ski-swap.jpg" alt="Check out the ski swap!" class="h-[600px] w-auto" />
	<a
		href="https://maps.app.goo.gl/6yi9KR9HMoKQe1Qu7"
		rel="noreferrer noopener"
		target="_blank"
		aria-label="Ski swap location"
		class="my-8 flex underline underline-offset-2 hover:opacity-75 gap-2"><MapPin />Ski swap location</a
	>
</div>
