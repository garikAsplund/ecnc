<script lang="ts">
	import Facebook from './SVGs/Facebook.svelte';
	import Watermark from './Watermark.svelte';
</script>

<footer
	class="relative bottom-0 mt-auto flex w-full flex-col items-center justify-center space-y-8 border-t border-t-zinc-100 pt-8 px-8 text-center md:space-y-0"
>
	<a
		href="https://www.facebook.com/groups/1441033243294741"
		target="_blank"
		rel="noopener"
		class="block hover:opacity-75 md:hidden"
	>
		<Facebook />
	</a>
	<p>
		Eagle Cap Nordic Club is a chapter of the <a
			href="https://onc.org/"
			target="_blank"
			rel="noopener noreferrer"
			class="underline underline-offset-2 hover:opacity-75">Oregon Nordic Club</a
		>
	</p>

	<Watermark />
</footer>
