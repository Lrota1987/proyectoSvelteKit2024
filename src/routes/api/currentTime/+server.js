export async function GET() {
	console.log('GET function called in server.js of current-time API');
	return new Response(new Date().toLocaleTimeString());
}
