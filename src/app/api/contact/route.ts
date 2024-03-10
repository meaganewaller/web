export async function POST(req: Request) {
  const body = await req.json();
  try {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact: body }),
    });

    return new Response("ok", { status: 200 });
  } catch (e) {
    return new Response("error", { status: 500 });
  }
}
