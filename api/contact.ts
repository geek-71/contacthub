import { google } from 'googleapis';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req:any,
  res:any
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message }: FormData = req.body;

  const auth = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL,
    undefined,
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId!,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, message, new Date().toLocaleString()]],
      },
    });

    return res.status(200).json({ status:'sucess',message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('Google Sheets Error:', err);
    return res.status(500).json({status:'error', message: 'Error submitting form' });
  }
}
