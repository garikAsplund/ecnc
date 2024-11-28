<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { schema } from '$lib/schema';
	import { zod } from 'sveltekit-superforms/adapters';
	import { Mail } from 'lucide-svelte';
	
	let { data } = $props();
	let isLoading = $state(false);
	let isSubmitted = $state(false);
	let emailMessage = $state('');
	
	const { form, errors, constraints, message, enhance, validateForm } = superForm(data.form, {
		validators: zod(schema),
		schema,
		dataType: 'json',
		onSubmit: () => {
			isLoading = true;
		},
		onError: () => {
			isLoading = false;
		},
		onResult: () => {
			isLoading = false;
		}
	});
</script>

<section class="flex flex-col items-center justify-center rounded-md">
	<div class="my-8 w-full max-w-xl px-4">
		<h2 class="text-center text-lg font-semibold mb-4">
			Sign up for our newsletter!
		</h2>
		{#if $message && isSubmitted}
			<p class="rounded px-4 py-2 text-center text-sm">
				{$message}
			</p>
		{:else}
			<!-- Center the form but let its contents align naturally -->
			<div class="flex justify-center">
				<form
					method="POST"
					use:enhance
					class="flex flex-col w-full max-w-md"
					novalidate
				>
					<div class="space-y-2">
						<label 
							for="email" 
							class="block text-sm font-medium"
						>
							Email address
						</label>
						{#if $errors.email}
							<p class="text-red-600 dark:invert text-sm" id="email-error" role="alert">
								{$errors.email}
							</p>
						{/if}
						<div class="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 sm:items-center">
							<div class="relative w-full">
								<Mail
									class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400"
								/>
								<input
									type="email"
									id="email"
									name="email"
									bind:value={$form.email}
									required
									autocomplete="email"
									disabled={isLoading}
									aria-describedby={$errors.email ? 'email-error' : undefined}
									aria-invalid={$errors.email ? 'true' : undefined}
									class:opacity-50={isLoading}
									class="w-full rounded-md border border-gray-300 bg-white/90 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
								/>
							</div>
							<button
								type="submit"
								class="w-full sm:w-auto shrink-0 rounded-md border border-black dark:text-gray-400 dark:border-gray-400 dark:hover:border-gray-500 bg-transparent px-4 py-2 font-medium shadow-lg transition-all hover:border-black/50 hover:bg-black/10"
								class:opacity-50={isLoading}
								disabled={isLoading}
							>
								{#if isLoading}
									Submitting...
								{:else}
									Subscribe
								{/if}
							</button>
						</div>
						{#if $message && !isSubmitted}
							<p class="rounded bg-black/50 px-4 py-2 text-sm text-gray-100">{$message}</p>
						{/if}
					</div>
				</form>
			</div>
		{/if}
	</div>
</section>

<!-- <style>
	@media (prefers-color-scheme: dark) {
		input:-webkit-autofill {
			-webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset;
			-webkit-text-fill-color: #f1f1f1;
		}
		input:-webkit-autofill:focus {
			-webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset;
			-webkit-text-fill-color: #f1f1f1;
		}
	}
</style> -->