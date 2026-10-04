export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle newsletter subscription
    if (url.pathname === '/api/subscribe' && request.method === 'POST') {
      return handleSubscribe(request, env);
    }

    // All other requests: serve static assets
    return env.ASSETS.fetch(request);
  }
};

async function handleSubscribe(request, env) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  let email;
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400, headers });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400, headers });
  }

  const server = env.MAILCHIMP_SERVER;
  const listId = env.MAILCHIMP_LIST_ID;
  const apiKey = env.MAILCHIMP_API_KEY;

  const res = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    }
  );

  const data = await res.json();

  // Already subscribed is not an error
  if (res.ok || data.title === 'Member Exists') {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  return new Response(JSON.stringify({ error: data.detail || 'Error' }), { status: 500, headers });
}
