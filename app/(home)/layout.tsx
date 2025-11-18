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
        <div className="grid grid-cols-12 gap-8">
          {/* Company Info Column - Left Side */}
          <div className="col-span-12 md:col-span-4">
            <p className="text-sm mb-6">
              <b>Ciberseguridad</b> creada por y para <b>LatAm</b>, aprendamos y aseguremos juntos. Creado por entusiastas de Ciberseguridad para CISO, CSO, CTO, CIO, SOC, CSIRT, SecOps, DevSecOps, DPO, CPO y mucho más...
            </p>
            <p className="text-xs">
              © Copyright 2025 DivisionCero
            </p>
            {/* System Status Badge */}
            <div className="mt-4">
              <a
                href="https://status.divisioncero.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium transition-colors hover:opacity-80"
                aria-label="Estado de los sistemas"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-fd-muted-foreground">
                  Estado de los sistemas
                </span>
              </a>
            </div>
            {/* Social Media Icons */}
            <div className="mt-4 flex flex-wrap gap-4">
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
          
          {/* Spacer - Empty Column */}
          <div className="hidden md:block md:col-span-2"></div>
          
          {/* Navigation Columns - Right Side */}
          <div className="col-span-12 md:col-span-6 ml-auto grid grid-cols-3 gap-4">
            {/* About Column */}
            <div className="flex flex-col gap-y-2.5">
              <h3 className="font-medium mb-4">Acerca de</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm hover:underline">Documentación</a></li>
                <li><a href="/framework" className="text-sm hover:underline">Framework Kudo</a></li>
                <li><a href="/politicas" className="text-sm hover:underline">Políticas</a></li>
              </ul>
            </div>

            {/* Product Column */}
            <div className="flex flex-col gap-y-2.5">
              <h3 className="font-medium mb-4">Productos</h3>
              <ul className="space-y-2">
                <li><a href="https://divisioncero.com/cursos?utm_source=kudo.divisioncero.com" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">CyberAcademy</a></li>
                <li><a href="https://divisioncero.com/home/empresas?utm_source=kudo.divisioncero.com" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Ciberseguridad Empresarial</a></li>
                <li><a href="/framework" className="text-sm hover:underline">Framework</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-y-2.5">
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="https://divisioncero.com/terminos-de-servicio?utm_source=kudo.divisioncero.com" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Términos de Servicio</a></li>
                <li><a href="https://divisioncero.com/politica-de-privacidad?utm_source=kudo.divisioncero.com" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
                <li><a href="https://divisioncero.com/politica-de-cookies?utm_source=kudo.divisioncero.com" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Política de Cookies</a></li>
                <li><a href="https://divisioncero.com/trust-center?utm_source=kudo.divisioncero.com" className="text-sm hover:underline" target="_blank" rel="noopener noreferrer">Centro de Confianza</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}