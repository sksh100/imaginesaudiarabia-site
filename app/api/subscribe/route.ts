import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get('email') as string;

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const credentialsPath = path.join(process.cwd(), 'lib', 'credentials', 'imaginesaudi-service-account.json');
    const keyFile = await fs.readFile(credentialsPath, 'utf-8');
    const credentials = JSON.parse(keyFile);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1Gouy78hNqY8oFt0CWkPnA3EO13FeXawsMc3kHIIGPMw'; // ← replace this
    const range = 'Sheet1!A:A';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
