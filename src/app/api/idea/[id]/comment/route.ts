import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request, { params }: { params: any }) {
  const workspaceUrl = req.headers.get('x-workspace');
  const url = new URL(req.url);

  const body = await req.json();
  const apiToken = url.searchParams.get('api_token');
  const ideaId = params.id as { id: string };

  try {
    const response = await axios.post(
      `${workspaceUrl}/a/rest/v1/ideas/${ideaId}/comment`,
      {
        text: body.content,
      },
      {
        headers: {
          api_token: apiToken,
        },
      },
    );
    // Return the response data as JSON
    return NextResponse.json(response.data);
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
