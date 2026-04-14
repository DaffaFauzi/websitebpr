"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Role = "user" | "assistant";
type ChatMessage = { role: Role; content: string };

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Halo! Saya asisten BPR Bonding. Tulis pertanyaan kamu tentang layanan, persyaratan, atau proses pengajuan.",
    },
  ]);

  const listRef = useRef<HTMLDivElement | null>(null);

  const canSend = input.trim().length > 0 && !busy;

  const apiMessages = useMemo(
    () =>
      messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    [messages]
  );

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [open, messages.length]);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;

    setInput("");
    setBusy(true);

    setMessages((prev) => [...prev, { role: "user", content: text }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...apiMessages, { role: "user", content: text }] }),
      });

      const data = (await res.json()) as { reply?: string; error?: string };
      const reply =
        data.reply ??
        data.error ??
        "Maaf, saat ini AI belum bisa merespons. Coba lagi sebentar ya.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, terjadi kendala koneksi. Coba lagi sebentar ya.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90]">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-[320px] overflow-hidden rounded-[28px] border border-[var(--brand-border)] bg-[var(--brand-surface)] shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:w-[380px]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand-brown)] text-white">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-black">BPR AI Assistant</div>
                  <div className="text-xs text-black/55">
                    {busy ? "Sedang mengetik..." : "Online"}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] text-black/70 hover:text-black"
                aria-label="Tutup chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={listRef} className="max-h-[360px] space-y-3 overflow-auto px-4 py-4">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={[
                    "w-full",
                    m.role === "user" ? "flex justify-end" : "flex justify-start",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6",
                      m.role === "user"
                        ? "bg-[var(--brand-brown)] text-white"
                        : "border border-[var(--brand-border)] bg-[var(--brand-soft)] text-black/80",
                    ].join(" ")}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[var(--brand-border)] bg-[var(--brand-surface)] p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send();
                  }}
                  placeholder="Tulis pertanyaan..."
                  className="h-11 w-full rounded-2xl border border-[var(--brand-border)] bg-white px-4 text-sm text-black outline-none placeholder:text-black/40 focus:ring-2 focus:ring-[color-mix(in_oklab,var(--brand-brown),transparent_70%)]"
                />
                <button
                  type="button"
                  onClick={send}
                  disabled={!canSend}
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-2xl",
                    canSend
                      ? "bg-[var(--brand-brown)] text-white"
                      : "bg-black/10 text-black/40",
                  ].join(" ")}
                  aria-label="Kirim"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-[var(--brand-brown)] text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
          aria-label="Buka chat AI"
        >
          <Bot className="h-6 w-6" />
        </button>
      ) : null}
    </div>
  );
}
