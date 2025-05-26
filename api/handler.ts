import { google } from "googleapis"

type FormData = {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const { name, email, message }: FormData = await request.json()

    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"],
    )

    const sheets = google.sheets({ version: "v4", auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId!,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, message, new Date().toLocaleString()]],
      },
    })

    return Response.json({
      status: "success",
      message: "Form submitted successfully!",
    })
  } catch (err) {
    console.error("Google Sheets Error:", err)
    return Response.json({ status: "error", message: "Error submitting form" }, { status: 500 })
  }
}
