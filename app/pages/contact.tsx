import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-[var(--brand-black)]">
          <div className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="text-sm font-medium text-white/60">Contact Us</div>
                <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
                  Let’s discuss your needs with us
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/70">
                  Sampaikan kebutuhan penjaminan atau asuransi Anda. Tim kami akan
                  membantu analisa kebutuhan dan memberikan rekomendasi solusi
                  terbaik.
                </p>

                <div className="mt-10 grid gap-5 text-sm text-white/70 sm:grid-cols-2">
                  <div>
                    <div className="font-medium text-white/90">Alamat</div>
                    <div className="mt-1">Isi alamat kantor Anda di sini.</div>
                  </div>
                  <div>
                    <div className="font-medium text-white/90">Telepon</div>
                    <div className="mt-1">Isi nomor telepon di sini.</div>
                  </div>
                  <div>
                    <div className="font-medium text-white/90">Email</div>
                    <div className="mt-1">Isi email di sini.</div>
                  </div>
                  <div>
                    <div className="font-medium text-white/90">Jam Operasional</div>
                    <div className="mt-1">Senin–Jumat, 09.00–17.00</div>
                  </div>
                </div>
              </div>

              <Card className="border-white/10 bg-white/5 text-white backdrop-blur">
                <CardContent className="p-8">
                  <div className="text-lg font-semibold tracking-tight text-white">
                    Kirim Pesan
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="mb-2 text-sm font-medium text-white/80">
                        Nama
                      </div>
                      <Input
                        placeholder="Nama lengkap"
                        className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-white/80">
                        Email
                      </div>
                      <Input
                        type="email"
                        placeholder="nama@email.com"
                        className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-white/80">
                        Nomor Telepon
                      </div>
                      <Input
                        placeholder="08xxxxxxxxxx"
                        className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <div className="mb-2 text-sm font-medium text-white/80">
                        Pesan
                      </div>
                      <Textarea
                        placeholder="Tulis kebutuhan Anda..."
                        className="border-white/10 bg-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                    <Button type="button" variant="secondary" className="w-full">
                      Kirim
                    </Button>
                    <div className="text-xs leading-5 text-white/50">
                      Kami akan merespons pesan Anda secepat mungkin.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

