"use client";

import { useMemo, useState } from "react";
import { Building2, CheckCircle2, Handshake, Search, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import BrandLogo from "@/app/components/BrandLogo";
import { PageHero } from "@/app/components/ui/page-hero";
import { Container, Section } from "@/app/components/ui/section";
import Gallery from "@/app/components/Gallery";
import { useI18n } from "@/app/i18n/I18nProvider";

export default function AboutPage() {
  const { t } = useI18n();
  const [branchQuery, setBranchQuery] = useState("");
  const [showAllBranches, setShowAllBranches] = useState(false);

  const org = {
    director: {
      title: t("aboutPage.orgRoles.director"),
      name: "Chrisnia Nutbaiti",
    },
    ops: {
      title: t("aboutPage.orgRoles.opsManager"),
      name: "Herlambang Sangsoko",
    },
    engManager: {
      title: t("aboutPage.orgRoles.engManager"),
      name: "Mesaliani Negara",
    },
    financeHead: {
      title: t("aboutPage.orgRoles.finSpv"),
      name: "Cucuk Suratningsih",
    },
    engHead: {
      title: t("aboutPage.orgRoles.techSpv"),
      name: "Lilik Amaliya Putri",
    },
  };

  const branches = useMemo(
    () => [
      { name: "Cabang Aceh", addr: "Jl. Cut Nyan Dhien No. 464 Lamteuen Barat, Kec. Jaya Baru – Kota Banda Aceh", phone: "+62 81167131313" },
      { name: "Cabang Jambi", addr: "Alifia Residence Blok E, 05 Kel. Kenali Asam atas Kec. Kota Baru, Kota Jambi", phone: "+62 81320028085" },
      { name: "Cabang Lampung", addr: "Jl. Pulau singkep No. 126 Ruko E, kel. Sukarame Baru, Kec. Sukarame, Kota Bandar Lampung", phone: "+62 85279627653" },
      { name: "Cabang Banjarmasin", addr: "Komplek Palace Blok A No. 4 Tanta Hulu kec. Tanta Kab. Tabalong Kalimantan Selatan", phone: "+62 8115133397" },
      { name: "Cabang Bandung", addr: "Jl. H. sugandi no. 5 komp. Bumi manjahlega indah RT. 006 RW.013 kel. Manjahlega kec. Rancasari kota bandung1", phone: "+62 85213599998" },
      { name: "Cabang Pontianak", addr: "Jl. Kesehatan Gg. Amanah No. 11 ( rumah ke 2 sebelah kiri )Rt.001 Rw.012 Kel. Kota baru Kec. Pontianak selatan kota pontianak.", phone: "+62 85252529191" },
      { name: "Cabang Surabaya", addr: "JL. Krukah Tengah No. 73 Surabaya", phone: "+62 81233774583" },
      { name: "Cabang Balikpapan", addr: "Ruko Sepinggan Pratama Blok SQ3 – 11 Jl. Sepinggan Pratama, Sepinggan, Kec. Balikpapan Selatan, Kota Balikpapan", phone: "+62 85321819290" },
      { name: "Cabang Solo", addr: "JL. Ahmad Yani 40, Solo, Central Java The Sunan Hotel, Lobby Hotel Arcade I, 57143, Gilingan, Banjarsari, Surakarta City, Central Java 57134", phone: "+62 81318253224" },
      { name: "Cabang Makassar", addr: "Komplek Zamrud 2 Blok J No. 14, Jalan Adyaksa Baru, Kel Masale, Kec. Panakkukang Kota Makassar", phone: "+62 85299216789" },
      { name: "Cabang Palembang", addr: "Jl. Basuki Rahmat No. 1674 Rt. 025 Rw.006, Kel. Pahlawan Kec. Ilir Timur I Palembang – 30126", phone: "+62 81373795859" },
      { name: "Cabang Kendari", addr: "Jl. Sao-Sao, Kelurahan Bende, Kecamatan Kadia, Kota Kendari, Provinsi Sulawesi Tenggara", phone: "+62 82258674205" },
      { name: "Cabang Bali", addr: "Jl. Wani No1 Gerokgak Gede, Desa Delod Peken, Kec. Tabanan, Kab. Tabanan, Provinsi Bali", phone: "+62 818135175" },
      { name: "Cabang Mataram", addr: "Jl. Airlangga No.11x, Gomong, Kec. Selaparang, Kota Mataram, Nusa Tenggara Barat", phone: "+62 82341507928" },
      { name: "Cabang Batam", addr: "Komplek Bumi Riau Makmur Blok D No. 14, JL. Laksamana Bintan, Sungai Panas - Batam", phone: "+62 82367081206" },
      { name: "Cabang Medan", addr: " Jl. Sei Serayu No.85, Babura Sunggal, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20121.", phone: "+62 361 0000 0015" },
      { name: "Cabang Palu", addr: "Komplek Zamrud 2 Blok J No. 14, Jalan Adyaksa Baru, Kel Masale, Kec. Panakkukang Kota Makassar.", phone: "+62 411 0000 0016" },
      { name: "Cabang Maluku", addr: "Jl. Kabenti Desa Labuha Kec. Bacan Kab. Halmahera Selatan, Maluku.", phone: "+62 61 0000 0017" },
      { name: "Cabang Papua", addr: "Jl. Akasia V blok D 176 Padang Bulan Jayapura.", phone: "+62 711 0000 0018" },
    ],
    []
  );

  const filteredBranches = useMemo(() => {
    const q = branchQuery.trim().toLowerCase();
    if (!q) return branches;
    return branches.filter((b) => `${b.name} ${b.addr} ${b.phone}`.toLowerCase().includes(q));
  }, [branchQuery, branches]);

  const visibleBranches = useMemo(() => {
    if (branchQuery.trim()) return filteredBranches;
    return showAllBranches ? filteredBranches : filteredBranches.slice(0, 8);
  }, [branchQuery, filteredBranches, showAllBranches]);

  return (
    <div className="min-h-screen bg-[#faf9f8]">
      <Navbar />
      <main className="pb-20">
        <PageHero
          breadcrumbLabel={t("aboutPage.headerBreadcrumb")}
          title={t("aboutPage.headerTitle")}
          description={t("aboutPage.heroDesc")}
        />

        {/* Intro Section */}
        <Section className="pt-0">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-black leading-tight">
                  Mitra Penjaminan<br />Profesional dan Terpercaya
                </h2>
                <p className="text-base text-black/70 leading-relaxed max-w-xl">
                  {t("aboutPage.contentA")}
                </p>

                <div className="mt-2">
                  <button className="rounded-full border border-black/20 bg-transparent px-6 py-2.5 text-sm font-semibold text-black hover:bg-black/5 transition-colors">
                    {t("aboutPage.showMore")}
                  </button>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {t("aboutPage.highlights").map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[var(--brand-brown)] flex-shrink-0" />
                      <span className="text-sm font-medium text-black/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Pills */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <div className="flex items-center gap-3 rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-brown)]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black leading-none">10000+</div>
                      <div className="text-[10px] uppercase font-bold text-black/50 mt-1">{t("aboutPage.stats.clients")}</div>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => document.getElementById('about-branches')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-3 rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 shadow-sm transition-colors hover:bg-black/5 text-left"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-brown)] transition-colors">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black leading-none">10+</div>
                      <div className="text-[10px] uppercase font-bold text-black/50 mt-1">Cabang</div>
                    </div>
                  </button>
                  <div className="flex items-center gap-3 rounded-full border border-[var(--brand-border)] bg-white px-4 py-2 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-brown)]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-black leading-none">99%</div>
                      <div className="text-[10px] uppercase font-bold text-black/50 mt-1">{t("aboutPage.stats.successRate")}</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-[400px] lg:h-[500px] w-full rounded-[32px] border border-[var(--brand-border)] bg-gradient-to-br from-[#f2eee8] to-[#e4ded5] flex items-center justify-center p-8 shadow-[var(--shadow-soft)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_100%)]" />
                <div className="relative z-10 scale-[1.5] sm:scale-[2]">
                  <BrandLogo />
                </div>
              </motion.div>
            </div>
          </Container>
        </Section>

        {/* Visi Misi Section */}
        <Section className="pt-0">
          <Container>
            <div className="flex flex-col items-center mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 py-2 text-xs font-semibold text-black/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-brown)]" />
                {t("aboutPage.visionMission")}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-[var(--brand-border)] bg-[#f4f1ed] p-8 lg:p-12 shadow-[var(--shadow-soft)]"
            >
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Visi</h3>
                  <p className="text-base text-black/70 leading-relaxed font-normal">
                    Menjadi perusahaan agen yang terbaik dan terpercaya serta berkontribusi dalam meningkatkan bisnis mitra.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Misi</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--brand-brown)] font-bold text-base mt-0.5">•</span>
                      <span className="text-base text-black/70 leading-relaxed font-normal">Komitmen untuk memberikan layanan terbaik bagi para mitra.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--brand-brown)] font-bold text-base mt-0.5">•</span>
                      <span className="text-base text-black/70 leading-relaxed font-normal">Secara Konsisten meningkatkan kemampuan sumber daya manusia dan infrastruktur untuk memberikan layanan terbaik kepada seluruh mitra.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--brand-brown)] font-bold text-base mt-0.5">•</span>
                      <span className="text-base text-black/70 leading-relaxed font-normal">Fokus untuk menjaga kepercayaan dan memberikan nilai tambah bagi para pemangku kepentingan perusahaan.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Struktur Organisasi Section */}
        <Section className="pt-0">
          <Container>
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-2">{t("aboutPage.orgStructure")}</h2>
              <p className="text-sm text-black/50">Struktur organisasi BPR Bonding untuk mendukung layanan yang cepat dan profesional.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-[var(--brand-border)] bg-[#f4f1ed] p-8 lg:p-16 shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-col items-center gap-12">
                {/* Director */}
                <div className="relative flex flex-col items-center">
                  <div className="z-10 relative flex h-[90px] w-64 flex-col items-center justify-center rounded-[20px] border border-black/5 bg-white p-4 text-center shadow-sm overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#8B1D1D] to-transparent opacity-90" />
                    <div className="text-sm font-bold text-black">
                      {org.director.title}
                    </div>
                    <div className="mt-1 text-xs text-black/60">{org.director.name}</div>
                  </div>
                  {/* Vertical line down */}
                  <div className="absolute top-full h-12 w-[1.5px] bg-black/10" />
                </div>

                {/* Subordinates */}
                <div className="relative flex w-full flex-col items-center">
                  {/* Horizontal line connecting all 4 */}
                  <div className="absolute top-0 h-[1.5px] w-full lg:w-[90%] bg-black/10" />

                  <div className="grid w-full lg:w-[90%] grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
                    {[org.ops, org.engManager, org.financeHead, org.engHead].map((role) => (
                      <div key={role.name} className="relative flex flex-col items-center">
                        {/* Vertical line up to connector */}
                        <div className="absolute -top-12 h-12 w-[1.5px] bg-black/10" />
                        <div className="z-10 relative flex h-[90px] w-full flex-col items-center justify-center rounded-[20px] border border-black/5 bg-white p-4 text-center shadow-sm transition-transform hover:-translate-y-1 overflow-hidden">
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#8B1D1D] to-transparent opacity-90" />
                          <div className="text-[11px] font-bold text-black">
                            {role.title}
                          </div>
                          <div className="mt-1.5 text-[11px] text-black/60">{role.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Nilai Perusahaan Section */}
        <Section className="pt-0">
          <Container>
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-3xl font-bold text-black">{t("aboutPage.companyValues")}</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { title: t("aboutPage.visionTitle"), desc: t("aboutPage.visionDesc"), Icon: ShieldCheck },
                { title: t("aboutPage.opsTitle"), desc: t("aboutPage.opsDesc"), Icon: Zap },
                { title: t("aboutPage.partnershipTitle"), desc: t("aboutPage.partnershipDesc"), Icon: Handshake },
              ].map(({ title, desc, Icon }, idx) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-[32px] border border-[var(--brand-border)] bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-brown)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed text-black/70 font-normal">{desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Kantor Cabang Section */}
        <Section className="pt-0">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-[var(--brand-border)] bg-[#f4f1ed] p-8 lg:p-12 shadow-[var(--shadow-soft)]"
            >
              <div className="mx-auto max-w-xl mb-10 relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40" />
                <input
                  type="text"
                  value={branchQuery}
                  onChange={(e) => setBranchQuery(e.target.value)}
                  placeholder={t("aboutPage.branchesSearch")}
                  className="h-12 w-full rounded-full border border-white/40 bg-white/60 pl-12 pr-4 text-sm font-medium text-black placeholder:text-black/40 shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-brown)]/20"
                />
              </div>

              <div className="flex flex-col items-center mb-10 text-center">
                <h2 className="text-2xl font-bold text-black mb-2">{t("aboutPage.branches")}</h2>
                <p className="text-sm text-black/60">{t("aboutPage.branchesDesc")}</p>
              </div>

              {filteredBranches.length > 0 ? (
                <>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleBranches.map((b) => (
                      <div
                        key={b.name}
                        className="flex flex-col justify-between rounded-[24px] border border-[var(--brand-border)] bg-white p-6 shadow-sm transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-md"
                      >
                        <div>
                          <div className="text-sm font-bold text-black mb-2">
                            {b.name}
                          </div>
                          <p className="text-[11px] leading-relaxed text-black/60 mb-4">{b.addr}</p>
                        </div>
                        <div className="inline-flex self-start items-center gap-2 rounded-full border border-black/5 px-3 py-1.5 text-[10px] font-bold text-black/70">
                          {b.phone}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!branchQuery.trim() && filteredBranches.length > 8 && (
                    <div className="mt-10 flex justify-center">
                      {!showAllBranches ? (
                        <button
                          type="button"
                          onClick={() => setShowAllBranches(true)}
                          className="inline-flex h-11 items-center rounded-full border border-[var(--brand-border)] bg-white px-6 text-sm font-semibold text-black/70 shadow-sm transition-colors hover:text-black hover:bg-black/5"
                        >
                          {t("aboutPage.showAll")}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setShowAllBranches(false);
                            document.getElementById('about-branches')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex h-11 items-center rounded-full border border-[var(--brand-border)] bg-white px-6 text-sm font-semibold text-black/70 shadow-sm transition-colors hover:text-black hover:bg-black/5"
                        >
                          Tampilkan Lebih Sedikit
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black/20 mb-4 shadow-sm">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-black">
                    {t("aboutPage.branchesNotFoundTitle")}
                  </h3>
                  <p className="mt-1 text-xs text-black/50">
                    {t("aboutPage.branchesNotFoundHint")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setBranchQuery("")}
                    className="mt-4 text-xs font-semibold text-[var(--brand-brown)] hover:underline"
                  >
                    {t("aboutPage.branchesClear")}
                  </button>
                </div>
              )}
            </motion.div>
          </Container>
        </Section>

        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
