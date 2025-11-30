<script lang="ts">
	import { MapPin, Calendar, Clock, DollarSign, Users, Mail } from 'lucide-svelte';
</script>

<div class="flex w-full flex-col items-center">
	<div class="w-full max-w-4xl space-y-8 pb-12">
		<!-- Event Image -->
		<div class="flex w-full justify-center">
			<enhanced:img
				src="/static/SKI_SWAP.jpg"
				alt="Annual Ski Swap"
				class="h-auto w-full max-w-2xl rounded-md md:h-[400px] object-cover"
			/>
		</div>

		<!-- Event Title -->
		<h1 class="text-center text-4xl font-bold">Annual Ski Swap</h1>

		<!-- Main Event Details -->
		<div class="rounded-md bg-slate-100/80 p-6 dark:bg-gray-800/80 space-y-6">
			<!-- Date and Time -->
			<div class="space-y-4">
				<div class="flex items-start space-x-3">
					<Calendar class="mt-1 h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
					<div>
						<p class="font-semibold text-gray-900 dark:text-gray-100">Saturday, December 13</p>
						<p class="text-gray-700 dark:text-gray-300">10:00 am - 1:00 pm</p>
					</div>
				</div>

				<div class="flex items-start space-x-3">
					<Clock class="mt-1 h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
					<div>
						<p class="font-semibold text-gray-900 dark:text-gray-100">Drop-off Gear</p>
						<p class="text-gray-700 dark:text-gray-300">8:30 am - 10:00 am</p>
					</div>
				</div>

				<div class="flex items-start space-x-3">
					<MapPin class="mt-1 h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
					<div>
						<p class="font-semibold text-gray-900 dark:text-gray-100">Athletic Center</p>
						<p class="text-gray-700 dark:text-gray-300">511 West Park St</p> 
						<p>Enterprise, OR 97828</p>
						<p class="text-sm text-gray-600 dark:text-gray-400 italic">(behind Safeway)</p>
						<a
							href="https://maps.app.goo.gl/6yi9KR9HMoKQe1Qu7"
							rel="noreferrer noopener"
							target="_blank"
							aria-label="Ski swap location"
							class="mt-2 inline-flex items-center space-x-1 text-sm underline underline-offset-2 hover:opacity-75"
						>
							<!-- <MapPin size={14} /> -->
							<span>View on map</span>
						</a>
					</div>
				</div>
			</div>

			<hr class="border-gray-300 dark:border-gray-600" />

			<!-- Event Description -->
			<div class="space-y-4">
				<!-- <p class="leading-relaxed text-gray-800 dark:text-gray-200">
					Join us on December 13 for the Annual Ski Swap at the Athletic Center. Drop off gear from
					8:30 AM - 10:00 AM. Admission is Free.
				</p> -->

				<div class="flex items-start space-x-3">
					<DollarSign class="mt-1 h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
					<div>
						<p class="font-semibold text-gray-900 dark:text-gray-100">Sales Information</p>
						<p class="text-gray-700 dark:text-gray-300">
							50% of the sales benefit Fergi, the rest is yours.
						</p>
					</div>
				</div>
			</div>

			<hr class="border-gray-300 dark:border-gray-600" />

			<!-- Contact Information -->
			<!-- <div class="flex items-start space-x-3">
				<Mail class="mt-1 h-5 w-5 flex-shrink-0 text-gray-700 dark:text-gray-300" />
				<div>
					<p class="font-semibold text-gray-900 dark:text-gray-100">Questions?</p>
					<p class="text-gray-700 dark:text-gray-300">Contact Anette Christoffersen</p>
				</div>
			</div> -->
		</div>

		<!-- Volunteer Section -->
		<div class="rounded-md bg-blue-50/80 p-6 dark:bg-blue-900/20 space-y-4">
			<div class="flex items-start space-x-3">
				<Users class="mt-1 h-5 w-5 flex-shrink-0 text-blue-700 dark:text-blue-300" />
				<div class="space-y-2">
					<p class="font-semibold text-blue-900 dark:text-blue-100">Volunteers Needed</p>
					<p class="text-blue-800 dark:text-blue-200">
						Volunteers are needed to help with the Ski Swap. If you are available, please come to
						the Athletic Center at 8:30 am to help out.
					</p>
					<p class="text-sm text-blue-700 dark:text-blue-300">
						Jobs entail unloading gear, helping with sales, and directing traffic.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
