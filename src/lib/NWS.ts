export class NWS {
    private baseUrl = 'https://api.weather.gov';
    private headers = {
        'User-Agent': '(weather-app, contact@example.com)', // Replace with your info
        'Accept': 'application/json'
    };

    async getPointData(lat: number, lon: number) {
        const response = await fetch(
            `${this.baseUrl}/points/${lat},${lon}`,
            { headers: this.headers }
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }

    async getForecast(pointData: any) {
        const { gridId, gridX, gridY } = pointData.properties;
        const response = await fetch(
            `${this.baseUrl}/gridpoints/${gridId}/${gridX},${gridY}/forecast`,
            { headers: this.headers }
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }

    async getHourlyForecast(pointData: any) {
        const { gridId, gridX, gridY } = pointData.properties;
        const response = await fetch(
            `${this.baseUrl}/gridpoints/${gridId}/${gridX},${gridY}/forecast/hourly`,
            { headers: this.headers }
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    }
}