import axios from 'axios';

const BASE_URL = 'http://worldtimeapi.org/api/timezone';

const fetchTimezone = async () => {
    try {
        // Exemplo de consulta para pegar todos os timezones
        const response = await axios.get(`${BASE_URL}/Europe/Lisbon.txt`); // Pode alterar para o timezone desejado

        const timezoneData = {
            timezone: 'Europe/Lisbon', // Exemplo de timezone, pode ser dinâmico
            datetime: response.data,
        };

        return new Response(JSON.stringify({ timezoneData }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching timezone data:', error.message);
        return new Response(
            JSON.stringify({ error: 'Error fetching timezone data' }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
};

export async function GET() {
    return await fetchTimezone();
}
