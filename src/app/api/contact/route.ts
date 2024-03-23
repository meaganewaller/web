export async function POST(req: Request) {
  const body = await req.json();
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact: body }),
    });

    if (!resp.ok) {
      throw new Error("Error");
    }

    return new Response("ok", { status: 200 });
  } catch (e) {
    return new Response("error", { status: 500 });
  }
}
