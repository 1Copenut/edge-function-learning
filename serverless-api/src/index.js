/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const resp = await fetch('https://api.unsplash.com/photos', {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`
    },
  });
  const data = await resp.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-type': 'application/json'
    },
  });

  // const { query } = await request.json()p;
  // return new Response(`Your query was ${query}`);
}
