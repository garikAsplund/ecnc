<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	<h1 class="text-6xl font-bold text-black">{$page.status}: {$page.error?.message}</h1>
</div>