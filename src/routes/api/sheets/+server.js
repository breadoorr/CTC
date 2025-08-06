// src/routes/api/sheets/+server.js
import { google } from 'googleapis';
import { json, error } from '@sveltejs/kit';

const spreadsheetId = '1FVOOcvNzozmqxQxOIHK2Q-C4A3pkLs366ufrfymaM54';

export async function POST({ request }) {
    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('message');

        if (!name || !phone) {
            throw error(400, 'Name and phone are required');
        }

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const client = await auth.getClient();
        const googleSheets = google.sheets({ version: 'v4', auth: client });

        await googleSheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:C',
            valueInputOption: 'RAW',
            resource: {
                values: [[name, phone, message]],
            },
        });

        return json({ success: true });
    } catch (err) {
        throw error(500, `Failed to submit to Google Sheets: ${err.message}`);
    }
}