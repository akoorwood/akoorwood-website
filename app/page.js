import SiteHeader from '../components/site-header'

const whatsapp = 'https://wa.me/6281226162778?text=Halo%20Admin%20Akoor%20Wood%20%F0%9F%91%8B%0A%0ASaya%20berkunjung%20dari%20website%20Akoor%20Wood.%20Saya%20ingin%20bertanya%20mengenai%20produk%20furniture%20yang%20tersedia.%0A%0AMohon%20informasinya.%20Terima%20kasih.'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#241b16]">
      <SiteHeader />

      <section id="home" className="relative isolate min-h-[560px] scroll-mt-24 overflow-hidden bg-[#4a3024] text-white sm:min-h-[620px] md:min-h-0 md:mx-auto md:max-w-[1440px]">
        <img
          src="/akoor-hero-interior.png"
          alt="Interior furniture Akoor Wood dengan kursi kayu dan meja samping"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:relative md:h-auto md:object-contain md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c130e]/75 via-[#271a12]/40 to-[#271a12]/10 md:from-[#1c130e]/60 md:via-[#271a12]/25 md:to-transparent" />
        <div className="relative z-10 flex min-h-[560px] items-center px-6 py-12 sm:min-h-[620px] sm:px-8 md:absolute md:inset-0 md:min-h-0 md:px-12 md:py-8 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-[78%] sm:max-w-[68%] md:max-w-[48%]">
              <span className="mb-4 block h-1 w-12 rounded-full bg-[#c91420] sm:mb-5 sm:h-1.5 sm:w-16 md:mb-7 md:w-20" />
              <p className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85 sm:text-xs md:mb-4 md:text-xs md:tracking-[0.34em]">Handcrafted Furniture</p>
              <h1 className="text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-[clamp(1.45rem,5vw,5.5rem)]">AKOOR WOOD</h1>
              <p className="mt-3 text-lg font-light tracking-wide sm:text-xl md:mt-6 md:text-[clamp(.8rem,2.2vw,1.9rem)]">Dari Kayu Menjadi Cerita</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/90 sm:text-base md:mt-5 md:text-[clamp(.55rem,1.25vw,1.125rem)]">
                Furniture premium Jepara dengan karakter kayu alami, desain modern, dan sentuhan handmade workshop.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 md:mt-9 md:gap-4">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#bd101b] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#a30c16] md:px-8 md:py-4 md:text-base">
                  Hubungi WhatsApp
                </a>
                <a href="#catalog" className="rounded-full border border-white/90 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#35251c] md:px-8 md:py-4 md:text-base">
                  Lihat Katalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Keunggulan Akoor Wood" className="border-b border-[#eadfd3] bg-[#fffdfa] px-6 py-9 sm:py-11 md:mx-auto md:max-w-[1440px]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-8">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e9e5] text-[#bd101b]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-7h6v7M8 9h.01M16 9h.01"/></svg>
            </span>
            <div><h2 className="text-sm font-semibold text-[#4b3025] sm:text-base">Kualitas Jepara</h2><p className="mt-1 text-xs leading-relaxed text-[#806e61] sm:text-sm">Dikerjakan dengan keterampilan dan ketelitian pengrajin berpengalaman.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e9e5] text-[#bd101b]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg>
            </span>
            <div><h2 className="text-sm font-semibold text-[#4b3025] sm:text-base">Material Pilihan</h2><p className="mt-1 text-xs leading-relaxed text-[#806e61] sm:text-sm">Mengutamakan karakter kayu berkualitas.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e9e5] text-[#bd101b]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m14 6 4 4M4 20l4.5-1 10-10a2.12 2.12 0 0 0-3-3l-10 10L4 20Z"/><path d="M13 7 17 11"/></svg>
            </span>
            <div><h2 className="text-sm font-semibold text-[#4b3025] sm:text-base">Bisa Custom</h2><p className="mt-1 text-xs leading-relaxed text-[#806e61] sm:text-sm">Desain dan ukuran sesuai kebutuhan.</p></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8e9e5] text-[#bd101b]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 7h11v11H3zM14 11h4l3 3v4h-7z"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>
            </span>
            <div><h2 className="text-sm font-semibold text-[#4b3025] sm:text-base">Pengiriman Aman</h2><p className="mt-1 text-xs leading-relaxed text-[#806e61] sm:text-sm">Dikemas dengan baik hingga tujuan.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl scroll-mt-24 items-start gap-8 px-6 py-14 sm:gap-10 sm:py-16 md:grid-cols-[1.15fr_.85fr] md:gap-14 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66e50]">Cerita Kami</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#6f392b]">Tentang Akoor Wood</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#66564b] md:text-lg">
            <p>
              Akoor Wood merupakan brand furniture Jepara yang menghadirkan perpaduan keindahan kayu alami, desain modern, dan pengerjaan berkualitas dari pengrajin berpengalaman.
            </p>
            <p>
              Kami memproduksi berbagai kebutuhan furniture, mulai dari kursi cafe, kursi makan, meja, sofa, hingga furniture custom sesuai kebutuhan ruang dan karakter pelanggan.
            </p>
            <p>
              Setiap produk dibuat dengan memperhatikan pemilihan material, detail konstruksi, kenyamanan, serta nilai estetika. Kami percaya furniture bukan sekadar pelengkap ruangan, tetapi bagian dari cerita dan karakter sebuah tempat.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-3xl bg-[#6f392b] p-8 text-white shadow-xl md:p-10">
            <h3 className="text-2xl font-semibold">Filosofi Kami</h3>
            <p className="mt-4 leading-relaxed text-white/85">Kayu yang baik akan hidup puluhan tahun.</p>
            <p className="mt-3 leading-relaxed text-white/85">Kami ingin menghadirkan furniture yang tidak hanya indah saat pertama dilihat, tetapi tetap nyaman, fungsional, dan bernilai dalam jangka panjang.</p>
          </div>
          <div className="rounded-3xl border border-[#d8c7b8] bg-white/70 p-8 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a66e50]">Arah Kami</p>
            <h3 className="mt-3 text-xl font-semibold text-[#6f392b]">Visi Akoor Wood</h3>
            <p className="mt-3 leading-relaxed text-[#66564b]">Menjadi pilihan terpercaya untuk furniture kayu berkualitas dari Jepara.</p>
          </div>
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

      <section id="workshop" className="relative scroll-mt-24 overflow-hidden bg-[#faf7f2] px-6 py-14 text-[#4b3025] sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a725d]">Dari Awal Hingga Selesai</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Proses Kami</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#806e61] md:text-base">
              Dari pemilihan kayu, pengerjaan, hingga finishing, setiap tahap dilakukan dengan perhatian pada detail dan kualitas.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd101b] text-white shadow-lg ring-4 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-7h6v7M8 9h.01M16 9h.01"/></svg>
              </span>
              <h3 className="mt-3 text-sm font-semibold">Pilih Kayu</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd101b] text-white shadow-lg ring-4 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m14.5 4.5 5 5M4 20l4.8-1.2L20 7.6a2.12 2.12 0 0 0-3-3L5.2 16.4 4 20Z"/><path d="m13 6 5 5M3 21h7"/></svg>
              </span>
              <h3 className="mt-3 text-sm font-semibold">Pengerjaan</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd101b] text-white shadow-lg ring-4 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h16M7 16l8-8 3 3-8 8H7v-3Z"/><path d="m14 9 2-2M17 4v-2M20 7h2M5 5l1 1M3 10h2"/></svg>
              </span>
              <h3 className="mt-3 text-sm font-semibold">Finishing</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd101b] text-white shadow-lg ring-4 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></svg>
              </span>
              <h3 className="mt-3 text-sm font-semibold">Quality Check</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd101b] text-white shadow-lg ring-4 ring-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 7h11v11H3zM14 11h4l3 3v4h-7z"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>
              </span>
              <h3 className="mt-3 text-sm font-semibold">Pengiriman</h3>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 bg-[#30231d] bg-cover bg-center px-6 py-16 text-white md:px-10 md:py-20 md:mx-auto md:max-w-[1440px]" style={{ backgroundImage: "linear-gradient(rgba(24, 14, 9, 0.52), rgba(24, 14, 9, 0.62)), url('/contact-wood-home.png')" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.05fr_.95fr] md:items-start md:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6a58e]">Hubungi Kami</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl">
                Ada Rencana untuk Ruang Anda?
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Punya ide, kebutuhan, atau proyek furniture yang sedang Anda persiapkan? Kami ingin mendengarnya.
              </p>
              <div className="mt-10 border-l-2 border-[#bd101b] pl-5">
                <h3 className="text-xl font-semibold tracking-[0.12em]">AKOOR WOOD</h3>
                <p className="mt-2 text-sm text-white/60">Dari Kayu Menjadi Cerita</p>
              </div>
            </div>
            <div className="pt-1 md:pt-12">
              <p className="leading-relaxed text-white/75">
                Jangan ragu untuk bertanya atau berkonsultasi. Sampaikan gambaran kebutuhan Anda, dan mari bicarakan kemungkinan terbaik untuk mewujudkannya.
              </p>
              <p className="mt-5 leading-relaxed text-white/75">
                Baik untuk kebutuhan pribadi maupun proyek usaha, setiap percakapan bisa menjadi awal dari sebuah karya.
              </p>
              <p className="mt-7 font-medium text-white">Mari mulai percakapan bersama Akoor Wood.</p>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center rounded-full bg-[#bd101b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#a30c16]">
                Hubungi Kami via WhatsApp <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="mt-14 border-t border-white/15 pt-6 text-center text-xs text-white/50">
            <p>© 2026 Akoor Wood — Dari Kayu Menjadi Cerita</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
