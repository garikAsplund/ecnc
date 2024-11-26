<!-- src/routes/weather/+page.svelte -->
<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let { forecast } = $page.data;

    console.log( forecast);
    
    let currentTime = $state(new Date());
    
    onMount(() => {
        const timer = setInterval(() => {
            currentTime = new Date();
        }, 1000);
        
        return () => clearInterval(timer);
    });

    // Group forecast periods into day/night pairs
    // let forecastPairs = $derived(forecast.reduce((pairs: any[], period: any, i: number) => {
    //     if (i % 2 === 0) {
    //         pairs.push([period, forecast[i + 1]]);
    //     }
    //     return pairs;
    // }, []));

    function getWeatherIcon(forecast: string) {
        if (forecast.toLowerCase().includes('snow')) {
            return '❄️';
        } else if (forecast.toLowerCase().includes('sunny')) {
            return '☀️';
        } else if (forecast.toLowerCase().includes('cloudy')) {
            return '☁️';
        }
        return '🌙';
    }
</script>

<div class="max-w-7xl mx-auto p-4 font-sans">
    <!-- Title Bar -->
    <div class="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">
        <div class="text-xl font-bold">
            Salt Creek Summit Weather
        </div>
        <div class="text-sm text-gray-300">
            <a href="https://forecast.weather.gov/MapClick.php?lon=-117.07044996321203&lat=45.21018617575402" target="_blank" aria-label="Full forecast" class="underline underline-offset-4 hover:opacity-75">Full Forecast</a>
        </div>
        <div class="text-sm text-gray-300">
            Weather Report Time: {currentTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
        </div>
    </div>
    
    <!-- Current Conditions Bar -->
    <div class="bg-gray-100 border-x border-b border-gray-300 px-4 py-2 flex gap-8 items-center">
        <div class="text-base text-gray-700">
            Temperature: <span class="font-bold text-gray-900">{forecast[0]?.temperature}°F</span>
        </div>
        <div class="text-base text-gray-700">
            Wind: <span class="font-bold text-gray-900">{forecast[0]?.windSpeed} {forecast[0]?.windDirection}</span>
        </div>
    </div>

    <!-- Forecast Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-0 mt-4 border border-gray-200">
        {#each forecast as forecast, i}
            <!-- <div class="border-r border-gray-200 last:border-r-0"> -->
                <!-- Day Forecast -->
                 {#if i < 7}
                <div class="p-4 text-center border-b border-gray-200">
                    <div class="font-bold mb-2 h-8">{forecast.name}</div>
                    <div class="text-4xl mb-2">
                        <span class="emoji">{getWeatherIcon(forecast.shortForecast)}</span>
                        <div class="mt-2 text-sm bg-blue-50 p-1 rounded {forecast.probabilityOfPrecipitation.value ? '' : 'invisible'}">
                            {forecast.probabilityOfPrecipitation.value}%
                        </div>
                    </div>
                    <div class="font-bold emoji {forecast.isDaytime ? 'text-red-600 dark:brightness-[90%]' : 'text-blue-600 dark:brightness-[90%]'}">
                        {forecast.isDaytime ? 'High ' : 'Low '}{forecast.temperature} °F
                    </div>
                                        <div class="text-sm mt-2">{forecast.shortForecast}</div>

                </div>
                {/if}
                
                <!-- Night Forecast -->
                <!-- {#if night}
                    <div class="p-4 text-center bg-gray-50">
                        <div class="font-bold mb-2">{night.name}</div>
                        <div class="text-4xl mb-2">{getWeatherIcon(night.shortForecast)}</div>
                        <div class="text-sm mb-2">{night.shortForecast}</div>
                        <div class="font-bold text-blue-600">
                            Lo {night.temperature}°F
                        </div>
                        {#if night.probabilityOfPrecipitation?.value}
                            <div class="mt-2 text-sm bg-blue-50 p-1 rounded">
                                {night.probabilityOfPrecipitation.value}%
                            </div>
                        {/if}
                    </div>
                {/if} -->
            <!-- </div> -->
        {/each}
    </div>

    <!-- Detailed Forecast Section -->
    <!-- <div class="mt-8 bg-gray-50 p-4 rounded-lg">
        {#each forecast.slice(0, 3) || [] as period}
            <div class="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                <div class="flex items-center gap-4 mb-2">
                    <div class="font-bold">{period.name}</div>
                    <div class="text-2xl">{getWeatherIcon(period.shortForecast)}</div>
                </div>
                <div class="text-gray-700">
                    {period.detailedForecast}
                </div>
            </div>
        {/each}
    </div> -->
</div>