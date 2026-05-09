export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F2F2] text-[#111111]">
      {/* HERO SECTION */}https://github.com/akoorwood/akoorwood-website/actions
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

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#A63D32]">
            Tentang Akoor Wood
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Akoor Wood menghadirkan furniture kayu premium dari Jepara
            dengan konsep modern minimalis dan kualitas workshop.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-700">
            Kami percaya furniture bukan hanya barang,
            tetapi bagian dari cerita keluarga,
            cafe, hotel, dan ruang hidup.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl">✔ Kayu Berkualitas</h3>
              <p className="text-gray-600 mt-2">
                Material pilihan dengan finishing premium.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">✔ Handmade Workshop</h3>
              <p className="text-gray-600 mt-2">
                Dikerjakan langsung oleh tim workshop berpengalaman.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">✔ Custom Furniture</h3>
              <p className="text-gray-600 mt-2">
                Bisa custom ukuran, warna, dan model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="catalog" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#A63D32]">
              Koleksi Unggulan
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Produk furniture pilihan untuk rumah, cafe, dan hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Dining Collection',
              'Cafe Collection',
              'Living Collection',
            ].map((item) => (
              <div
                key={item}
                className="bg-[#F8F2F2] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
              >
                <div className="h-72 bg-[#D9B8B2]" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#A63D32]">
                    {item}
                  </h3>

                  <p className="mt-4 text-gray-700 leading-relaxed">
                    Furniture modern dengan karakter kayu alami dan desain premium.
                  </p>

                  <button className="mt-6 bg-[#A63D32] text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
                    Detail Produk
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-[#111111] text-white">
        <h2 className="text-4xl font-bold">
          Siap Membangun Ruang Penuh Cerita?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
          Konsultasikan kebutuhan furniture rumah, cafe, villa,
          atau hospitality project Anda bersama Akoor Wood.
        </p>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          className="inline-block mt-10 bg-[#A63D32] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >
          Konsultasi Sekarang
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6 text-center">
        <h3 className="text-2xl font-bold tracking-wide">
          AKOOR WOOD
        </h3>

        <p className="mt-4 text-white/60">
          Dari Kayu Menjadi Cerita
        </p>

        <p className="mt-6 text-sm text-white/40">
          © 2026 Akoor Wood. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
