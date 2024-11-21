import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  // Parse the URL to extract query parameters
  const { searchParams } = new URL(req.url);

  // Extract specific query parameters
  const code = searchParams.get('code'); // 'code' query parameter

  if (!code) {
    return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 });
  }

  try {
    // Make the POST request with Axios
    const response = await axios.post(
      'https://app.ideascale.com/a/global-oauth2/access-token',
      null,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        params: {
          grant_type: 'authorization_code',
          code,
          redirect_uri: `https://a717-130-193-123-98.ngrok-free.app/auth/callback`,
          client_id: `b0a59801-0a04-446e-9837-b812ce5d73b8`,
          client_secret: '8923c98b-2dfc-4c29-b4b0-183670994be3',
        },
      },
    );

    // Return the response data as JSON
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching access token:', error);

    return NextResponse.json(
      { error: 'Failed to fetch access token', details: error.message },
      { status: 500 },
    );
  }
}
