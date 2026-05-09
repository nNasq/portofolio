'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import folderIcon from '../assets/folder.png'

export const NAVBAR_HEIGHT_MOBILE = 64
export const NAVBAR_HEIGHT_DESKTOP = 80

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#hero' },
    { label: 'Stack', href: '#skills' },
    { label: 'Contact', href: '#lets-work-together' },
  ]

  return (
    <nav id="navbar" className={scrolled ? 'nav-scrolled' : 'nav-top'}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>

        {/* Desktop & Tablet Layout */}
        <div className="hidden-mobile nav-desktop-container" style={{ display: 'flex', alignItems: 'center' }}>
          {links.slice(0, 2).map(link => (
            <a key={link.label} href={link.href} className="font-body nav-link"
              style={{ fontSize: '0.85rem', color: '#0a0a0a', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'opacity 0.3s' }}>
              {link.label}
            </a>
          ))}
          <a href="#hero" className="nav-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src={folderIcon}
              alt="Logo Folder"
              width={56}
              height={56}
              style={{ objectFit: 'contain' }}
              priority
            />
          </a>
          {links.slice(2, 4).map(link => (
            <a key={link.label} href={link.href} className="font-body nav-link"
              style={{ fontSize: '0.85rem', color: '#0a0a0a', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'opacity 0.3s' }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Header & Toggle */}
        <div className="show-mobile" style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '0' }}>
          <a href="#hero">
            <Image
              src={folderIcon}
              alt="Logo Folder"
              width={40}
              height={40}
              style={{ objectFit: 'contain' }}
              priority
            />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu"
            style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 51 }}>
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#0a0a0a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#0a0a0a', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#0a0a0a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`show-mobile-menu ${menuOpen ? 'open' : ''}`} style={{
        position: 'absolute', top: '100%', left: 0, right: 0,
        background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: menuOpen ? '1px solid #e8e8e3' : 'none',
        borderBottom: menuOpen ? '1px solid #e8e8e3' : 'none',
        overflow: 'hidden', transition: 'max-height 0.4s ease, padding 0.4s ease',
        maxHeight: menuOpen ? '400px' : '0px',
        padding: menuOpen ? '2rem 1.5rem' : '0 1.5rem',
        display: 'flex', flexDirection: 'column', gap: '2rem'
      }}>
        {links.map(link => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="font-body"
            style={{ fontSize: '0.85rem', color: '#0a0a0a', textDecoration: 'none', letterSpacing: '0.3em', textTransform: 'uppercase', textAlign: 'center', opacity: menuOpen ? 1 : 0, transition: 'opacity 0.3s ease 0.1s' }}>
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        #navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-top {
          padding: 2rem 0;
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .nav-scrolled {
          padding: 1rem 0;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid #e8e8e3;
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; width: 100% !important; box-sizing: border-box !important; }
          .show-mobile-menu { display: flex !important; }
          .nav-top { padding: 0.75rem 0; min-height: 64px; display: flex; align-items: center; }
          .nav-scrolled { padding: 0.75rem 0; min-height: 64px; display: flex; align-items: center; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
          .show-mobile-menu { display: none !important; }
          .nav-desktop-container { gap: 4rem; }
          .nav-logo { margin: 0 2rem; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-desktop-container { gap: 2rem !important; }
          .nav-logo { margin: 0 1rem !important; }
          .nav-link { font-size: 0.75rem !important; letter-spacing: 0.15em !important; }
        }
        .nav-link:hover { opacity: 0.5; }
      `}</style>
    </nav>
  )
}