export async function GET() {
	console.log('GET function called in server.js of current-time API');
	const now = new Date();
	const date = now.toLocaleDateString();
	const time = now.toLocaleTimeString();
	
	return new Response(`${date}, ${time}`);
}
