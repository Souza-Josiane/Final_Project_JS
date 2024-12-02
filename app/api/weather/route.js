export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const apiKey = 'bc89802777673221f6a13c06f60ca70a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error('Weather data not found or invalid city.');
        }
        const data = await res.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(error.message, { status: 500 });
    }
}
