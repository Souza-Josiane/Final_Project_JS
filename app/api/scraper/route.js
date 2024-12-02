import axios from 'axios';
import * as cheerio from 'cheerio';

const PAGE_URL = 'https://en.wikipedia.org/wiki/Timeline_of_programming_languages';

export async function GET() {
    try {
        const response = await axios.get(PAGE_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        // Load HTML with cheerio
        const $ = cheerio.load(response.data);

        // Get title page
        const pageTitle = $('h1').text();
        console.log('Title Page: ', pageTitle);

        // Get first paragraph
        const pageParagraph = $('p').text();
        console.log('Paragraph: ', pageParagraph);

        // Return JSON response with title and paragraph
        return new Response(
            JSON.stringify({ title: pageTitle, paragraph: pageParagraph }),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('Error while scraping:', error.message);
        return new Response(
            JSON.stringify({ error: 'Error while scraping' }),
            {
                status: 500, headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}
