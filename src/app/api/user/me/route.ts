import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const authorizationHeader = req.headers.get('authorization');
  const workspaceUrl = req.headers.get('x-workspace');

  if (!authorizationHeader) {
    return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
  }

  // Split the header value and extract the token after "Bearer "
  const parts = authorizationHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return NextResponse.json({ error: 'Invalid authorization format' }, { status: 401 });
  }

  const accessToken = parts[1];

  try {
    const response = await axios.get(`${workspaceUrl}/a/rest/v1/person-info`, {
      headers: {
        'Content-Type': 'application/json',
        global_oauth_token: accessToken,
      },
    });

    // Return the response data as JSON
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error fetching access token:', error);

    return NextResponse.json(
      { error: 'Failed to fetch access token', details: error.message },
      { status: 500 },
    );
  }
}
