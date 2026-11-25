'use client'

import { useState } from 'react'

const links = [
  ['Beranda', '#home'],
  ['Produk', '#produk'],
  ['Katalog', '#catalog'],
  ['Tentang Kami', '#about'],
  ['Workshop', '#workshop'],
  ['Kontak', '#contact'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header sticky top-0 z-50 w-full border-b border-[#eadfd8] bg-[#fbf8f4]/95 text-[#332923] shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="https://www.akoorwood.com/" onClick={() => setOpen(false)} className="group flex shrink-0 items-center gap-3" aria-label="Akoor Wood, beranda">
          <img src="/akoor-logo-transparant.png" alt="Logo Akoor Wood" className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11" />
          <span className="leading-tight">
            <span className="block text-lg font-semibold tracking-[0.12em] text-[#8f352c]">AKOOR WOOD</span>
            <span className="hidden text-[9px] tracking-[0.24em] text-[#8b776b] sm:block">HANDCRAFTED FURNITURE</span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link py-3 text-[13px] font-medium tracking-wide text-[#51443c] transition-colors duration-200 hover:text-[#a63d32]">
              {label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/6281226162778?text=Halo%20Admin%20Akoor%20Wood%20%F0%9F%91%8B%0A%0ASaya%20berkunjung%20dari%20website%20Akoor%20Wood.%20Saya%20ingin%20bertanya%20mengenai%20produk%20furniture%20yang%20tersedia.%0A%0AMohon%20informasinya.%20Terima%20kasih." target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#a63d32] px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#873128] hover:shadow-md lg:inline-flex">
          Hubungi WhatsApp
        </a>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5d8cf] text-[#8f352c] transition hover:bg-[#f2e8e1] lg:hidden" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="flex w-5 flex-col gap-[5px]">
            <span className={`h-[2px] w-5 bg-current transition duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-5 bg-current transition duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-5 bg-current transition duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div className={`overflow-hidden border-t border-[#eadfd8] bg-[#fbf8f4] transition-all duration-300 lg:hidden ${open ? 'max-h-[440px] opacity-100' : 'max-h-0 border-t-transparent opacity-0'}`}>
        <nav aria-label="Navigasi mobile" className="mx-auto flex max-w-7xl flex-col px-5 py-3 md:px-8">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-[#eee4dd] py-3 text-sm font-medium text-[#51443c] transition-colors hover:pl-2 hover:text-[#a63d32]">
              {label}
            </a>
          ))}
          <a href="https://wa.me/6281226162778?text=Halo%20Admin%20Akoor%20Wood%20%F0%9F%91%8B%0A%0ASaya%20berkunjung%20dari%20website%20Akoor%20Wood.%20Saya%20ingin%20bertanya%20mengenai%20produk%20furniture%20yang%20tersedia.%0A%0AMohon%20informasinya.%20Terima%20kasih." target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="my-3 rounded-full bg-[#a63d32] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#873128]">
            Hubungi WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
