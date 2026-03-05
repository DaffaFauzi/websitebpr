import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Card, CardContent } from "@/app/components/ui/card";
import { Separator } from "@/app/components/ui/separator";

const values = [
  {
    title: "Profesionalisme dan Integritas",
    desc: "Kami menjunjung tinggi nilai-nilai integritas dan profesionalisme dalam setiap aspek layanan kami. Nasabah dapat mempercayai bahwa bisnis mereka akan ditangani dengan penuh dedikasi dan kejujuran.",
  },
  {
    title: "Teknologi dan Inovasi",
    desc: "Kami terus mengadopsi inovasi dan teknologi terbaru dalam memberikan layanan. Hal ini memastikan bahwa kami selalu dapat memberikan solusi yang efisien dan responsif terhadap perkembangan bisnis dan kebutuhan nasabah.",
  },
  {
    title: "Komitmen terhadap Kepuasan Pelanggan",
    desc: "Kami tidak hanya berkomitmen untuk memberikan layanan terbaik, tetapi juga untuk memastikan kepuasan pelanggan. Umpan balik dari pelanggan merupakan landasan utama dalam meningkatkan kualitas layanan kami secara berkelanjutan.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28">
            <div className="grid gap-10 md:grid-cols-2 md:items-end">
              <div>
                <div className="text-sm font-medium text-black/50">
                  Tentang Kami
                </div>
                <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl">
                  BPR Bonding
                </h1>
                <p className="mt-6 text-pretty text-base leading-7 text-black/60">
                  Perusahaan yang fokus pada bisnis di bidang Lembaga Penjaminan
                  & Asuransi Umum, dipercaya untuk memasarkan produk Bank
                  Garansi, Surety Bond dan Asuransi Umum.
                </p>
              </div>

              <Card className="bg-black text-white">
                <CardContent className="p-8">
                  <div className="text-sm font-medium text-white/70">
                    Ringkasan
                  </div>
                  <p className="mt-3 text-base leading-7 text-white/90">
                    Berdiri berdasarkan legalitas perijinan Usaha Berbasis Resiko
                    pada tanggal 20 Oktober 2023, didukung tenaga ahli
                    berpengalaman dan tersertifikasi di bidang Penjaminan dan
                    Asuransi Umum.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Separator />
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold tracking-tight text-black">
                  Tentang Perusahaan
                </h2>
                <div className="mt-5 space-y-5 text-base leading-7 text-black/65">
                  <p>
                    Perkenalkan kami PT. Buana Perkasa Rajanegara atau yang lebih
                    dikenal dengan nama BPR Bonding adalah perusahaan yang fokus
                    pada bisnis di bidang Lembaga Penjaminan & Asuransi Umum,
                    yang berdiri berdasarkan legalitas perijinan Usaha Berbasis
                    Resiko pada tanggal 20 Oktober 2023, dimana perusahaan kami
                    dipercaya oleh Lembaga Penjaminan dan Asuransi untuk
                    memasarkan produk Bank Garansi, Surety Bond dan Asuransi
                    Umum.
                  </p>
                  <p>
                    BPR Bonding merupakan perusahaan yang profesional dengan
                    didukung oleh tenaga ahli yang memiliki pengalaman dan
                    sertifikasi di bidang Penjaminan dan Asuransi Umum.
                  </p>
                  <p>
                    BPR Bonding adalah Perusahaan yang dapat didefinisikan
                    secara umum memiliki peran sebagai penghubung atau perantara
                    bagi Perusahaan Penyedia Barang atau Jasa, Penerima Jaminan
                    dan Lembaga Penjaminan atau Asuransi, yang meliputi analisa
                    risiko, pemilihan produk asuransi, negosiasi harga, dan
                    memberikan layanan purna jual sehingga BPR Bonding dapat
                    memberikan advis Penjaminan dan Asuransi yang sesuai dengan
                    kebutuhan Penjaminan dan Penerima Jaminan.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-7">
                    <div className="text-sm font-medium text-black/50">VISI</div>
                    <div className="mt-3 text-base leading-7 text-black">
                      Menjadi perusahaan agen yang terbaik dan terpercaya serta
                      berkontribusi dalam meningkatkan bisnis mitra.
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-7">
                    <div className="text-sm font-medium text-black/50">MISI</div>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                      <li>
                        Komitmen untuk memberikan layanan terbaik bagi para
                        mitra.
                      </li>
                      <li>
                        Secara konsisten meningkatkan kemampuan sumber daya
                        manusia dan infrastruktur untuk memberikan layanan
                        terbaik kepada seluruh mitra.
                      </li>
                      <li>
                        Fokus untuk menjaga kepercayaan dan memberikan nilai
                        tambah bagi para pemangku kepentingan perusahaan.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-sm font-medium text-black/50">Our Value</div>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-black sm:text-4xl">
                  Nilai yang kami pegang dalam setiap layanan.
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {values.map((v) => (
                <Card key={v.title}>
                  <CardContent className="p-7">
                    <div className="text-lg font-semibold tracking-tight text-black">
                      {v.title}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-black/65">
                      {v.desc}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

