exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json"
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers
    };
  }

  try {
    const body = event.body ? JSON.parse(event.body) : {};

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        ok: true,
        message: "KUZU API is working",
        action: body.action || null
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        ok: false,
        error: "Invalid request"
      })
    };
  }
};
