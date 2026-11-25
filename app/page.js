import SiteHeader from '../components/site-header'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F2EF] text-[#111111]">
      <SiteHeader />

      <section id="home" className="relative flex scroll-mt-24 flex-col items-center justify-center bg-[#A63D32] px-6 py-32 text-center text-white md:py-36">
        <h1 className="text-5xl font-bold tracking-wide md:text-7xl">AKOOR WOOD</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed md:text-2xl">Dari Kayu Menjadi Cerita</p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
          Furniture premium Jepara dengan karakter kayu alami,
          desain modern, dan sentuhan handmade workshop.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="rounded-2xl bg-white px-8 py-4 font-semibold text-[#A63D32] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            Hubungi WhatsApp
          </a>
          <a href="#catalog" className="rounded-2xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-[#A63D32]">
            Lihat Katalog
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold text-[#A63D32]">Tentang Akoor Wood</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Akoor Wood menghadirkan furniture kayu premium dari Jepara
            dengan konsep modern minimalis dan kualitas workshop.
          </p>
        </div>
        <div className="rounded-3xl bg-[#A63D32] p-10 text-white shadow-2xl">
          <h3 className="text-2xl font-bold">Filosofi Kami</h3>
          <p className="mt-4 leading-relaxed text-white/90">Kayu yang baik akan hidup puluhan tahun.</p>
        </div>
      </section>

      <section id="produk" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div id="catalog" className="scroll-mt-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b6c5c]">Pilihan Akoor Wood</p>
          <h2 className="mt-3 text-4xl font-bold text-[#A63D32]">Produk Unggulan</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600">Furniture dengan desain modern, karakter kayu alami, dan pengerjaan penuh perhatian.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className="h-72 bg-[#e6ddd6]" aria-label="Area foto produk" />
              <div className="p-6">
                <h3 className="text-2xl font-bold">Furniture Premium</h3>
                <p className="mt-3 leading-relaxed text-gray-600">Desain modern elegan khas Akoor Wood.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="workshop" className="scroll-mt-24 bg-[#eee5de] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b6c5c]">Dibuat di Jepara</p>
          <h2 className="mt-3 text-3xl font-bold text-[#A63D32] md:text-4xl">Sentuhan Workshop</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#62534a]">
            Setiap karya berawal dari pemilihan material dan proses pengerjaan yang teliti.
            Hubungi tim Akoor Wood untuk membicarakan kebutuhan furniture Anda.
          </p>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 bg-[#332923] px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-semibold tracking-[0.12em]">AKOOR WOOD</h2>
        <p className="mt-3 text-sm text-white/70">Dari Kayu Menjadi Cerita</p>
        <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#A63D32] px-6 py-3 text-sm font-semibold transition hover:bg-[#873128]">
          Hubungi Kami
        </a>
        <p className="mt-8 text-xs text-white/50">© 2026 Akoor Wood — Dari Kayu Menjadi Cerita</p>
      </footer>
    </main>
  )
}
