<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-[70vh] w-full flex-col items-center justify-center">
	<h1 class="text-6xl font-bold text-black">{$page.status}: {$page.error?.message}</h1>
	<a href="/"	aria-label="Go home" class="underline underline-offset-2 hover:opacity-75 mt-12">Go back home</a>
</div>