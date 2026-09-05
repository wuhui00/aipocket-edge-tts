const payload = {
  object: "list",
  data: [
    { id: "tts-1", object: "model", name: "tts-1" }
  ]
};

export default function onRequest() {
  return new Response(JSON.stringify(payload), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
