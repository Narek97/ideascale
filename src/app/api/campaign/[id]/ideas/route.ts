import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: any }) {
  const url = new URL(req.url);

  const workspaceUrl = req.headers.get('x-workspace');
  const apiToken = url.searchParams.get('api_token');
  const type = url.searchParams.get('type');
  const pageNumber = url.searchParams.get('pageNumber');
  const pageSize = url.searchParams.get('pageSize');
  const campaignId = params.id as { id: string };

  try {
    const response = await axios.get(
      `${workspaceUrl}/a/rest/v1/campaigns/${campaignId}/ideas/${
        type || 'recent'
      }/${pageNumber}/${pageSize}`,
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
