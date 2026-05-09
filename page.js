export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F2EF] text-[#111111]">

      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-[#A63D32] text-white">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          AKOOR WOOD
        </h1>

        <p className="mt-6 text-xl md:text-2xl max-w-2xl leading-relaxed">
          Dari Kayu Menjadi Cerita
        </p>

        <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80 leading-relaxed">
          Furniture premium Jepara dengan karakter kayu alami,
          desain modern, dan sentuhan handmade workshop.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="bg-white text-[#A63D32] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Hubungi WhatsApp
          </a>

          <a
            href="#catalog"
            className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#A63D32] transition"
          >
            Lihat Katalog
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#A63D32]">
            Tentang Akoor Wood
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Akoor Wood menghadirkan furniture kayu premium dari Jepara
            dengan konsep modern minimalis dan kualitas workshop.
          </p>
        </div>

        <div className="bg-[#A63D32] rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-2xl font-bold">
            Filosofi Kami
          </h3>

          <p className="mt-4 text-white/90 leading-relaxed">
            Kayu yang baik akan hidup puluhan tahun.
          </p>
        </div>
      </section>

      <section id="catalog" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#A63D32]">
            Produk Unggulan
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[1,2,3].map((item)=>(
            <div key={item} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-72 bg-[#d9d9d9]"></div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Furniture Premium
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  Desain modern elegan khas Akoor Wood.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-gray-500 text-sm">
        © 2026 Akoor Wood — Dari Kayu Menjadi Cerita
      </footer>
    </main>
  )
}
