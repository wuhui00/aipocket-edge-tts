const ORIGIN = "https://aipocket-edge-tts.xy3243033470.workers.dev";

export default async function onRequest(context) {
  const request = context.request;

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,Authorization,x-api-key",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body = await request.arrayBuffer();
  const headers = new Headers();
  headers.set("Content-Type", request.headers.get("Content-Type") || "application/json");
  const authorization = request.headers.get("Authorization");
  if (authorization) headers.set("Authorization", authorization);

  const upstream = await fetch(`${ORIGIN}/v1/audio/speech`, {
    method: "POST",
    headers,
    body,
  });

  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set("Cache-Control", "no-store");

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
