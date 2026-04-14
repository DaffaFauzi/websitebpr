export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      messages?: Array<{ role?: string; content?: string }>;
    };

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

    if (!apiKey) {
      return Response.json(
        {
          error:
            "AI belum dikonfigurasi. Tambahkan OPENAI_API_KEY di environment server untuk mengaktifkan chatbot.",
        },
        { status: 501 }
      );
    }

    const inputMessages = (body.messages || [])
      .filter((m) => typeof m?.content === "string" && m.content.trim().length > 0)
      .slice(-12)
      .map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: String(m.content),
      }));

    const system = [
      "Kamu adalah asisten AI untuk website BPR Bonding.",
      "Jawab dalam bahasa Indonesia yang sopan, ringkas, dan membantu.",
      "Jika pertanyaan meminta harga/premi yang spesifik, arahkan untuk konsultasi karena bergantung data proyek.",
      "Jika pertanyaan tidak jelas, ajukan 1-2 pertanyaan klarifikasi.",
    ].join(" ");

    const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: system }, ...inputMessages],
        temperature: 0.4,
      }),
    });

    if (!upstream.ok) {
      return Response.json(
        { error: "Gagal memproses permintaan AI. Coba lagi sebentar." },
        { status: 502 }
      );
    }

    const json = (await upstream.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const reply = json.choices?.[0]?.message?.content?.trim() || "";

    return Response.json({ reply: reply || "Maaf, saya belum mendapatkan jawaban." });
  } catch {
    return Response.json(
      { error: "Permintaan tidak valid. Coba lagi." },
      { status: 400 }
    );
  }
}
