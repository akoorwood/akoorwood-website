import SiteHeader from '../components/site-header'

const whatsapp = 'https://wa.me/6281226162778?text=Halo%20Admin%20Akoor%20Wood%20%F0%9F%91%8B%0A%0ASaya%20berkunjung%20dari%20website%20Akoor%20Wood.%20Saya%20ingin%20bertanya%20mengenai%20produk%20furniture%20yang%20tersedia.%0A%0AMohon%20informasinya.%20Terima%20kasih.'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#241b16]">
      <SiteHeader />

      <section
        id="home"
        className="relative isolate flex min-h-[680px] scroll-mt-24 items-center overflow-hidden bg-[#9d8069] px-6 py-24 text-white md:min-h-[760px] md:px-12 lg:px-20"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(28,19,14,.66) 0%, rgba(39,26,18,.42) 38%, rgba(39,26,18,.02) 75%), url('/akoor-hero.png')",
          backgroundPosition: 'center center',
          backgroundSize: '92% auto',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/15 via-transparent to-black/5" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <span className="mb-7 block h-1.5 w-20 rounded-full bg-[#c91420]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-white/75">Jepara · Handcrafted Furniture</p>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">AKOOR WOOD</h1>
            <p className="mt-6 text-2xl font-light tracking-wide md:text-3xl">Dari Kayu Menjadi Cerita</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Furniture premium Jepara dengan karakter kayu alami, desain modern, dan sentuhan handmade workshop.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#bd101b] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#a30c16]">
                Hubungi WhatsApp
              </a>
              <a href="#catalog" className="rounded-full border border-white/90 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#35251c]">
                Lihat Katalog
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/70 md:flex">
          <span className="h-px w-12 bg-white/60" /> Crafted with care in Jepara
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
