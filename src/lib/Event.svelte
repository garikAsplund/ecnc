<script lang="ts">
	import { Calendar, MapPin, ExternalLink } from 'lucide-svelte';

	interface EventProps {
		title?: string;
		date?: string | Date;
		description?: string;
		location?: string;
		locationUrl?: string;
		image?: string;
		imageAlt?: string;
		link?: string;
		linkText?: string;
	}

	let {
		title = 'Annual meeting',
		date = '6 pm Tuesday 2 December',
		description = 'Join us for free pizza at our annual meeting!',
		location = 'M. Crow',
		locationUrl = 'https://maps.app.goo.gl/fwuYt8RrkiWaW1he7',
		image,
		imageAlt,
		link,
		linkText = 'Learn more'
	}: EventProps = $props();

	// function formatDate(dateInput: string | Date | undefined): string {
	// 	if (!dateInput) return '';
	// 	const dateObj = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
	// 	return dateObj.toLocaleDateString('en-US', {
	// 		weekday: 'long',
	// 		year: 'numeric',
	// 		month: 'long',
	// 		day: 'numeric'
	// 	});
	// }
</script>

<div class="w-fit max-w-2xl rounded-md bg-slate-100/80 shadow-lg dark:bg-gray-800/80 overflow-hidden md:translate-y-24">
	{#if image}
		<enhanced:img
			src={image}
			alt={imageAlt || title}
			class="w-full h-48 object-cover"
		/>
	{/if}

	<div class="p-6 space-y-4">
		<div class="space-y-2">
			<h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
				{title}
			</h2>

			{#if date}
				<div class="flex items-center space-x-2 text-md text-gray-700 dark:text-gray-300">
					<Calendar size={20} />
                    <div class="flex flex-col items-start space-y-1">
						<p class="font-semibold text-gray-900 dark:text-gray-100">Tuesday, December 2</p>
						<p class="text-gray-700 dark:text-gray-300">6:00 pm</p>
					</div>
				</div>
			{/if}

			{#if location}
				<div class="flex items-center space-x-2 text-md text-gray-700 dark:text-gray-300">
					<MapPin size={20} />
					{#if locationUrl}
						<a
							href={locationUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="underline underline-offset-2 hover:opacity-75"
						>
							{location}
						</a>
					{:else}
						<span>{location}</span>
					{/if}
				</div>
			{/if}
		</div>

		{#if description}
			<p class="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
				{description}
			</p>
		{/if}

		{#if link}
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2 hover:opacity-75 transition-opacity"
			>
				<span>{linkText}</span>
				<ExternalLink size={14} />
			</a>
		{/if}
	</div>
</div>

