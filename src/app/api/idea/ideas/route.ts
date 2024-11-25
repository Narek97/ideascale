import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);

  const workspaceUrl = req.headers.get('x-workspace');
  const apiToken = url.searchParams.get('api_token');
  const campaignIds = url.searchParams.get('campaignIds');
  const query = url.searchParams.get('query');

  try {
    const response = await axios.get(
      `${workspaceUrl}/a/rest/v1/ideas/search?discussionIDs=${campaignIds}&query=${query}`,
      {
        headers: {
          api_token: apiToken,
        },
      },
    );
    // Return the response data as JSON
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Failed to fetch campaigns', details: error.message },
      { status: 500 },
    );
  }
}
