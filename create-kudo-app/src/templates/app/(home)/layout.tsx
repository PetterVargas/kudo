import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Banner } from 'fumadocs-ui/components/banner';
import { baseOptions } from '@/app/layout.config';
import { Linkedin, Twitter, Facebook, Github, Instagram, Youtube, Globe, MessageCircle } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner id="cybersecurity-tools"
        variant="rainbow"
        rainbowColors={[
          '#39b298',
          '#39b298',
          'transparent',
          '#39b298',
          'transparent',
          '#39b298',
          'transparent',
        ]}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
          <span>🚀 Nuevas herramientas online y gratuitas de Ciberseguridad</span>
          <a
            href="https://divisioncero.com/herramientas"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline hover:text-white/80 transition-colors"
          >
            Dale un vistazo 👀 →
          </a>
        </div>
      </Banner>
      <HomeLayout 
        {...baseOptions}
        className="flex-grow"
      >
        {children}
      </HomeLayout>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          {/* Left side: Copyright and Made with Love */}
          {/* Si deseas eliminar esta marca, considera contribuir al proyecto: https://github.com/PetterVargas/kudo */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs">
              © Copyright 2025 DivisionCero
            </p>
            <p className="text-sm">
              Hecho con 💚 por{' '}
              <a
                href="https://divisioncero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors"
              >
                DivisionCero
              </a>
              {' '}para la comunidad de Ciberseguridad de LatAm
            </p>
          </div>

          {/* Right side: Social Media Icons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a href="https://linkedin.com/company/divisioncero" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://x.com/divisioncero" aria-label="X (formerly Twitter)" target="_blank" rel="noopener noreferrer">
              <Twitter size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://facebook.com/divisioncerocom" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://github.com/PetterVargas" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://instagram.com/divisioncero" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://youtube.com/@divisioncero" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <Youtube size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://tiktok.com/@divisioncero" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="text-fd-secondary-foreground hover:text-primary transition-colors">
              <div className="flex h-[18px] w-[18px] items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </div>
            </a>
            <a href="https://discord.com/invite/RPxQTPBfvG" aria-label="Discord" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
            <a href="https://petervargas.com" aria-label="Peter Vargas Website" target="_blank" rel="noopener noreferrer">
              <Globe size={18} className="text-fd-secondary-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}