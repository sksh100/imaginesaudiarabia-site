import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import path from "path";
import { promises as fs } from "fs";

const SHEET_ID = "1Gouy78hNqY8oFt0CWkPnA3EO13FeXawsMc3kHIIGPMw";
const SHEET_NAME = "Sheet1"; // Change if your sheet/tab is named differently

async function getGoogleSheetsClient() {
  const keyFile = path.join(process.cwd(), "lib/credentials/imaginesaudi-service-account.json");
  const credentials = JSON.parse(await fs.readFile(keyFile, "utf8"));
  const scopes = ["https://www.googleapis.com/auth/spreadsheets"]; 
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes,
  });
  return google.sheets({ version: "v4", auth });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const email = data.get("email");
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const sheets = await getGoogleSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:A`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}
