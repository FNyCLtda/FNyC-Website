export async function onRequestGet({ env }) {
  // KV donde Cloudflare expone los archivos estáticos
  const files = await env.ASSETS.list({
    prefix: "docs/"
  });

  const docs = files.objects.map(file => ({
    name: file.key.split("/").pop(),
    path: "/" + file.key
  }));

  return new Response(JSON.stringify(docs), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
