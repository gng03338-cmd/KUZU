export default async (request) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers
    });
  }

  try {
    const body = request.body
      ? await request.json()
      : {};

    return new Response(
      JSON.stringify({
        ok: true,
        message: "KUZU API is working",
        action: body.action || null
      }),
      {
        status: 200,
        headers
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: "Invalid request"
      }),
      {
        status: 400,
        headers
      }
    );
  }
};
