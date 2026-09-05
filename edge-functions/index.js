const ORIGIN = "https://aipocket-edge-tts.xy3243033470.workers.dev";

export default async function onRequest() {
  return fetch(`${ORIGIN}/`, {
    method: "GET",
    redirect: "follow",
  });
}
