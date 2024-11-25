import type { PageServerLoad } from './$types';
import { NWS } from '$lib/NWS';

export const load: PageServerLoad = async () => {
    const weatherService = new NWS();
    
    try {
        const pointData = await weatherService.getPointData(45.3375, -117.2947);
        const forecast = await weatherService.getForecast(pointData);
        
        // Format the forecast periods to match the desired display
        const formattedForecast = forecast.properties.periods.map(period => ({
            name: period.name,
            temperature: period.temperature,
            temperatureUnit: period.temperatureUnit,
            windSpeed: period.windSpeed,
            windDirection: period.windDirection,
            shortForecast: period.shortForecast,
            detailedForecast: period.detailedForecast,
            probabilityOfPrecipitation: period.probabilityOfPrecipitation,
            isDaytime: period.isDaytime
        }));

        return {
            forecast: formattedForecast
        };
    } catch (error) {
        console.error('Error fetching weather:', error);
        throw error;
    }
};