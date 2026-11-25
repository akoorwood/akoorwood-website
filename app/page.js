import SiteHeader from '../components/site-header'

const whatsapp = 'https://wa.me/6281226162778?text=Halo%20Admin%20Akoor%20Wood%20%F0%9F%91%8B%0A%0ASaya%20berkunjung%20dari%20website%20Akoor%20Wood.%20Saya%20ingin%20bertanya%20mengenai%20produk%20furniture%20yang%20tersedia.%0A%0AMohon%20informasinya.%20Terima%20kasih.'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#241b16]">
      <SiteHeader />

      <section id="home" className="relative isolate scroll-mt-24 overflow-hidden bg-[#9d8069] text-white">
        <img
          src="/akoor-hero-interior.png"
          alt="Interior furniture Akoor Wood dengan kursi kayu dan meja samping"
          className="block h-auto w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c130e]/60 via-[#271a12]/25 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 py-5 sm:px-8 md:px-12 md:py-8 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-[48%] sm:max-w-[48%] md:max-w-[48%]">
              <span className="mb-3 block h-1 w-12 rounded-full bg-[#c91420] sm:mb-5 sm:h-1.5 sm:w-16 md:mb-7 md:w-20" />
              <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:mb-3 sm:text-[10px] md:mb-4 md:text-xs md:tracking-[0.34em]">Jepara · Handcrafted Furniture</p>
              <h1 className="text-[clamp(1.45rem,5vw,5.5rem)] font-semibold leading-[1.02] tracking-tight">AKOOR WOOD</h1>
              <p className="mt-2 text-[clamp(.8rem,2.2vw,1.9rem)] font-light tracking-wide sm:mt-3 md:mt-6">Dari Kayu Menjadi Cerita</p>
              <p className="mt-2 max-w-xl text-[clamp(.55rem,1.25vw,1.125rem)] leading-relaxed text-white/90 sm:mt-3 md:mt-5">
                Furniture premium Jepara dengan karakter kayu alami, desain modern, dan sentuhan handmade workshop.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 sm:mt-5 md:mt-9 md:gap-4">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#bd101b] px-3 py-2 text-[9px] font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#a30c16] sm:px-5 sm:py-2.5 sm:text-xs md:px-8 md:py-4 md:text-base">
                  Hubungi WhatsApp
                </a>
                <a href="#catalog" className="rounded-full border border-white/90 bg-white/10 px-3 py-2 text-[9px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#35251c] sm:px-5 sm:py-2.5 sm:text-xs md:px-8 md:py-4 md:text-base">
                  Lihat Katalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66e50]">Cerita Kami</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#6f392b]">Tentang Akoor Wood</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#66564b]">
            Akoor Wood menghadirkan furniture kayu premium dari Jepara dengan konsep modern minimalis dan kualitas workshop.
          </p>
        </div>
        <div className="rounded-3xl bg-[#6f392b] p-10 text-white shadow-xl">
          <h3 className="text-2xl font-semibold">Filosofi Kami</h3>
          <p className="mt-4 leading-relaxed text-white/85">Kayu yang baik akan hidup puluhan tahun.</p>
        </div>
      </section>

      <section id="produk" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
        <div id="catalog" className="scroll-mt-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66e50]">Pilihan Akoor Wood</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#6f392b]">Produk Unggulan</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#66564b]">Furniture dengan desain modern, karakter kayu alami, dan pengerjaan penuh perhatian.</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className="h-72 bg-gradient-to-br from-[#d8c4ad] to-[#8f6749]" aria-label="Area foto produk" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#39291f]">Furniture Premium</h3>
                <p className="mt-3 leading-relaxed text-[#76675c]">Desain modern elegan khas Akoor Wood.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="workshop" className="scroll-mt-24 bg-[#eee6dc] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66e50]">Dibuat di Jepara</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#6f392b] md:text-4xl">Sentuhan Workshop</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#62534a]">
            Setiap karya berawal dari pemilihan material dan proses pengerjaan yang teliti.
            Hubungi tim Akoor Wood untuk membicarakan kebutuhan furniture Anda.
          </p>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 bg-[#30231d] px-6 py-12 text-center text-white">
        <h2 className="text-2xl font-semibold tracking-[0.12em]">AKOOR WOOD</h2>
        <p className="mt-3 text-sm text-white/70">Dari Kayu Menjadi Cerita</p>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-[#bd101b] px-6 py-3 text-sm font-semibold transition hover:bg-[#a30c16]">
          Hubungi Kami
        </a>
        <p className="mt-8 text-xs text-white/50">© 2026 Akoor Wood — Dari Kayu Menjadi Cerita</p>
      </footer>
    </main>
  )
}
