<script>
	import { onMount } from 'svelte';

	let isLoading = $state(true);
	let mapLoaded = $state(false);
	let map = $state();

	onMount(async () => {
		// Define initMap function before loading Google Maps
		// window.initMap = function() {
		//   map = new google.maps.Map(document.getElementById('nac-widget-stations'), {
		//     center: { lat: 45.2, lng: -117.2 }, // Wallowa Mountains approximate center
		//     zoom: 9,
		//     mapTypeId: 'terrain'
		//   });
		// };

		// Load Google Maps
		const googleMapsScript = document.createElement('script');
		googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
		googleMapsScript.async = true;
		googleMapsScript.defer = true;

		// Load WAC widget script
		const widgetScript = document.createElement('script');
		widgetScript.type = 'text/javascript';
		widgetScript.src = 'https://du6amfiq9m9h7.cloudfront.net/loader/nac-widget-loader.min.js';
		widgetScript.setAttribute('data-widget', 'stations');
		widgetScript.setAttribute('data-center', 'WAC');
		// Add these new attributes to control the map view
		widgetScript.setAttribute('data-lat', '45.3305462');
		widgetScript.setAttribute('data-lng', '-117.2224752');
		widgetScript.setAttribute('data-zoom', '10');

		try {
			// Load Google Maps first
			await new Promise((resolve, reject) => {
				googleMapsScript.onload = resolve;
				googleMapsScript.onerror = reject;
				document.head.appendChild(googleMapsScript);
			});

			// Then load widget
			await new Promise((resolve, reject) => {
				widgetScript.onload = resolve;
				widgetScript.onerror = reject;
				document.body.appendChild(widgetScript);
			});

			isLoading = false;
			mapLoaded = true;
		} catch (error) {
			console.error('Error loading scripts:', error);
			isLoading = false;
		}

		return () => {
			// Cleanup
			if (googleMapsScript.parentNode) {
				googleMapsScript.parentNode.removeChild(googleMapsScript);
			}
			if (widgetScript.parentNode) {
				widgetScript.parentNode.removeChild(widgetScript);
			}
			delete window.initMap;
		};
	});
</script>

<svelte:head>
	<title>Weather Stations | XC Site</title>
	<meta name="description" content="Weather stations map for cross-country conditions" />
</svelte:head>

<div class="container">
	<h1>Weather Stations</h1>

	{#if isLoading}
		<div class="loading">
			<p>Loading weather stations...</p>
		</div>
	{/if}

	<div
		id="nac-widget-stations"
		class="weather-widget"
		class:hidden={isLoading}
		class:loaded={mapLoaded}
	></div>
</div>

<style>
	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
	}

	.weather-widget {
		width: 100%;
		height: 800px;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		overflow: hidden;
		margin-top: 1rem;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.weather-widget.loaded {
		opacity: 1;
	}

	.hidden {
		display: none;
	}

	.loading {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 400px;
		background-color: #f7fafc;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}
</style>
