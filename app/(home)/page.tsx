'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Book, Rocket, Shield, FileText, Users, Target, Zap, Globe, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef    = useRef<HTMLElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const svgRef     = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // ── Diagram: nodes + paths, then text ─────────────────────────────────
    const heroCtx = gsap.context(() => {
      gsap.from('.diag-node', {
        opacity: 0,
        y: -10,
        duration: 0.55,
        stagger: 0.09,
        ease: 'power2.out',
      });
      gsap.from('#node-kudo', {
        opacity: 0,
        y: -6,
        duration: 0.6,
        delay: 0.15,
        ease: 'power2.out',
      });
      gsap.from('.conn-path', {
        opacity: 0,
        duration: 0.45,
        stagger: 0.08,
        delay: 0.3,
        ease: 'power2.out',
      });
      gsap.from('.gsap-hi', {
        y: 22,
        opacity: 0,
        duration: 0.7,
        stagger: 0.13,
        delay: 0.65,
        ease: 'power3.out',
      });

      // Breathing glow fill on Kudo box
      gsap.to('#kudo-glow-fill', {
        opacity: 0.14,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      });

      // Traveling dots — bidirectional with yoyo
      if (svgRef.current) {
        [1, 2, 3, 4, 5, 6].forEach((n, i) => {
          const path = svgRef.current!.querySelector<SVGPathElement>(`#conn-${n}`);
          const dot  = svgRef.current!.querySelector<SVGCircleElement>(`#dot-${n}`);
          if (!path || !dot) return;
          const len   = path.getTotalLength();
          const state = { t: 0 };
          gsap.to(state, {
            t: 1,
            duration: 2.4,
            repeat: -1,
            yoyo: false,
            delay: i * 0.5 + 1.4,
            ease: 'none',
            onUpdate() {
              const pt = path.getPointAtLength(state.t * len);
              gsap.set(dot, { attr: { cx: pt.x, cy: pt.y } });
            },
          });
        });
      }
    }, heroRef);

    // ── Stats: slide-up + count-up on scroll ──────────────────────────────
    const statsCtx = gsap.context(() => {
      gsap.from('.gsap-stat', {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gsap-stats-grid',
          start: 'top 85%',
        },
      });

      document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count!);
        const suffix = el.dataset.suffix ?? '';
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter() {
            const obj = { v: 0 };
            gsap.to(obj, {
              v: target,
              duration: 1.2,
              ease: 'power2.out',
              onUpdate() { el.textContent = Math.round(obj.v) + suffix; },
            });
          },
        });
      });
    }, statsRef);

    return () => {
      heroCtx.revert();
      statsCtx.revert();
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))] font-sans">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 via-transparent to-fd-secondary/5 pointer-events-none" />

        {/* ── Cloudflare-style correlation diagram ── */}
        <div className="w-full overflow-hidden">
          <svg
            ref={svgRef}
            viewBox="0 0 1200 160"
            className="w-full text-fd-foreground"
            aria-hidden="true"
            style={{ display: 'block' }}
          >
            <defs>
              <pattern id="kudo-dots" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
                <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" opacity="0.08" />
              </pattern>
              <filter id="kudo-glow" x="-15%" y="-20%" width="130%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="1200" height="220" fill="url(#kudo-dots)" />

            {/* Connecting paths — left side → Kudo left midpoint (474, 80) */}
            <path id="conn-1" className="conn-path"
              d="M135,20 C290,20 370,80 474,80"
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-2" className="conn-path"
              d="M240,80 C340,80 420,80 474,80"
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-3" className="conn-path"
              d="M240,140 C340,140 380,80 474,80"
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeOpacity="0.22" strokeDasharray="5 4" />

            {/* Connecting paths — right side → Kudo right midpoint (726, 80) */}
            <path id="conn-4" className="conn-path"
              d="M1065,20 C910,20 830,80 726,80"
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-5" className="conn-path"
              d="M960,80 C860,80 760,80 726,80"
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-6" className="conn-path"
              d="M960,140 C860,140 810,80 726,80"
              fill="none" stroke="currentColor" strokeWidth="1"
              strokeOpacity="0.22" strokeDasharray="5 4" />

            {/* ISO 27001 — partially off left, top */}
            <g className="diag-node">
              <rect x="-20" y="8" width="155" height="24" rx="3"
                fill="transparent" stroke="currentColor"
                strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="57" y="24" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">ISO 27001</text>
            </g>

            {/* PCI-DSS — middle left */}
            <g className="diag-node">
              <rect x="95" y="68" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor"
                strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="167" y="84" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">PCI-DSS</text>
            </g>

            {/* NIST CSF — bottom left */}
            <g className="diag-node">
              <rect x="95" y="128" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor"
                strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="167" y="144" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">NIST CSF</text>
            </g>

            {/* SOC 2 — partially off right, top */}
            <g className="diag-node">
              <rect x="1065" y="8" width="155" height="24" rx="3"
                fill="transparent" stroke="currentColor"
                strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="1142" y="24" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">SOC 2</text>
            </g>

            {/* CSA CCM — middle right */}
            <g className="diag-node">
              <rect x="960" y="68" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor"
                strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="1032" y="84" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">CSA CCM</text>
            </g>

            {/* CIS Controls — bottom right */}
            <g className="diag-node">
              <rect x="960" y="128" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor"
                strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="1032" y="144" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">CIS Controls</text>
            </g>

            {/* Kudo center — x=474 y=57 w=252 h=45, center=(600,80) */}
            <g id="node-kudo">
              <rect id="kudo-glow-fill" x="468" y="51" width="264" height="57" rx="7"
                fill="#4DAE84" opacity="0.04" />
              <rect x="474" y="57" width="252" height="45" rx="4"
                fill="transparent" stroke="#4DAE84" strokeWidth="1.5"
                filter="url(#kudo-glow)" />

              {/* Sub-box: SGSI */}
              <rect x="482" y="63" width="76" height="33" rx="2"
                fill="transparent" stroke="#4DAE84"
                strokeWidth="1" strokeOpacity="0.38" strokeDasharray="4 3" />
              <text x="520" y="83" textAnchor="middle" fontSize="9"
                fill="#4DAE84" opacity="0.8">SGSI</text>

              {/* Sub-box: Políticas */}
              <rect x="562" y="63" width="76" height="33" rx="2"
                fill="transparent" stroke="#4DAE84"
                strokeWidth="1" strokeOpacity="0.38" strokeDasharray="4 3" />
              <text x="600" y="83" textAnchor="middle" fontSize="9"
                fill="#4DAE84" opacity="0.8">Políticas</text>

              {/* Sub-box: Controles */}
              <rect x="642" y="63" width="76" height="33" rx="2"
                fill="transparent" stroke="#4DAE84"
                strokeWidth="1" strokeOpacity="0.38" strokeDasharray="4 3" />
              <text x="680" y="83" textAnchor="middle" fontSize="9"
                fill="#4DAE84" opacity="0.8">Controles</text>

              {/* Corner handles */}
              <rect x="470" y="53" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="722" y="53" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="470" y="98" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="722" y="98" width="8" height="8" rx="1" fill="#4DAE84" />
              {/* Mid-edge handles */}
              <rect x="596" y="53" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
              <rect x="596" y="98" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
              <rect x="470" y="76" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
              <rect x="722" y="76" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
            </g>

            {/* Traveling dots — one per path, start at framework node side */}
            <circle id="dot-1" r="3.5" fill="#4DAE84" cx="135" cy="20" />
            <circle id="dot-2" r="3.5" fill="#4DAE84" cx="240" cy="80" />
            <circle id="dot-3" r="3.5" fill="#4DAE84" cx="240" cy="140" />
            <circle id="dot-4" r="3.5" fill="#4DAE84" cx="1065" cy="20" />
            <circle id="dot-5" r="3.5" fill="#4DAE84" cx="960" cy="80" />
            <circle id="dot-6" r="3.5" fill="#4DAE84" cx="960" cy="140" />
          </svg>
        </div>

        {/* ── Text + CTAs ── */}
        <div className="max-w-4xl mx-auto px-4 pt-4 pb-4 text-center relative z-10">
          <h1 className="gsap-hi text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
            Kudo
          </h1>
          <h2 className="gsap-hi text-2xl lg:text-3xl font-semibold mb-4 text-fd-foreground">
            Framework de Ciberseguridad por y para LatAm
          </h2>
          <p className="gsap-hi text-xl text-fd-muted-foreground max-w-3xl mx-auto mb-5 leading-relaxed">
            Marco completo con SGSI, políticas, procedimientos y controles de Ciberseguridad.
            Más de 25 templates organizacionales listos para implementar.
          </p>
          <div className="gsap-hi flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/framework/overview"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 rounded-lg transition-colors"
            >
              Explorar Framework
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://divisioncero.com/home/kit-inicio-ciberseguridad"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fd-foreground border border-fd-border hover:bg-fd-muted/50 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar Kit
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-fd-muted/50">
        <div ref={statsRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">La fórmula es simple</h3>
            <div className="text-2xl font-mono bg-fd-card border rounded-lg py-6 px-4 inline-block">
              <span className="text-fd-primary">Coherencia</span> + Confianza = <span className="text-fd-foreground font-bold">Ciberseguridad</span>
            </div>
          </div>

          <div className="gsap-stats-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gsap-stat text-center">
              <div className="w-16 h-16 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-fd-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                <span data-count="8" data-suffix="">8</span> Dominios
              </h4>
              <p className="text-fd-muted-foreground">
                Controles organizados por dominios de seguridad para una implementación estructurada
              </p>
            </div>
            <div className="gsap-stat text-center">
              <div className="w-16 h-16 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-fd-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                <span data-count="36" data-suffix="">36</span> Controles
              </h4>
              <p className="text-fd-muted-foreground">
                Marco completo con 36 controles de Ciberseguridad
              </p>
            </div>
            <div className="gsap-stat text-center">
              <div className="w-16 h-16 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-fd-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">
                <span data-count="25" data-suffix="+">25+</span> Políticas
              </h4>
              <p className="text-fd-muted-foreground">
                Templates completos de políticas organizacionales basados en estándares internacionales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">¿Por qué usar Kudo?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Confianza entre partes interesadas</h4>
                    <p className="text-fd-muted-foreground text-sm">Aplica a inversores, gobiernos, empresas, clientes y usuarios</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Marco de referencia</h4>
                    <p className="text-fd-muted-foreground text-sm">Establece políticas comunes para gestión de ciberseguridad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Capacitación de equipos</h4>
                    <p className="text-fd-muted-foreground text-sm">Formación inicial y continua de colaboradores</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Auditorías simplificadas</h4>
                    <p className="text-fd-muted-foreground text-sm">Enfoque estructurado para evaluaciones internas y externas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-fd-card border border-fd-border/70 rounded-xl p-8 shadow-md">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold mb-2">Estructura Organizacional</h4>
                <p className="text-fd-muted-foreground text-sm">Modelo jerárquico con roles definidos</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-fd-muted/70 rounded-lg">
                  <Users className="h-5 w-5 text-fd-primary" />
                  <span className="font-medium">CEO - Responsabilidad ejecutiva</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-fd-muted/70 rounded-lg">
                  <Shield className="h-5 w-5 text-fd-primary" />
                  <span className="font-medium">CISO - Patrocinador del marco</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-fd-muted/70 rounded-lg">
                  <Zap className="h-5 w-5 text-fd-primary" />
                  <span className="font-medium">Equipos especializados - SOC, GRC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Products */}
      <section className="py-20 px-4 bg-fd-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Productos Complementarios</h3>
            <p className="text-xl text-fd-muted-foreground">
              Además de Kudo, explora nuestros otros recursos de Ciberseguridad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="https://cyberacademy.divisioncero.com/"
              className="group flex flex-col gap-4 p-8 rounded-xl border border-fd-border/60 bg-fd-card/40 hover:border-fd-foreground/40 hover:bg-fd-card/70 transition-all duration-200 shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-fd-primary" />
                </div>
                <h4 className="text-2xl font-semibold">CyberAcademy</h4>
              </div>
              <p className="text-fd-muted-foreground text-lg">
                Formación práctica en ciberseguridad: Aprendamos resolviendo problemas
              </p>
              <div className="flex items-center text-fd-primary font-medium mt-2">
                Explorar formación <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="https://divisioncero.com/home/empresas"
              className="group flex flex-col gap-4 p-8 rounded-xl border border-fd-border/60 bg-fd-card/40 hover:border-fd-foreground/40 hover:bg-fd-card/70 transition-all duration-200 shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-fd-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-fd-primary" />
                </div>
                <h4 className="text-2xl font-semibold">Ciberseguridad Empresarial</h4>
              </div>
              <p className="text-fd-muted-foreground text-lg">
                Metodología y automatización en ciberseguridad para empresas
              </p>
              <div className="flex items-center text-fd-primary font-medium mt-2">
                Ver servicios <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Comienza tu implementación hoy</h3>
          <p className="text-xl text-fd-muted-foreground mb-8">
            Accede a más de 25 templates de políticas organizacionales y construye un marco de ciberseguridad sólido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sgsi/politicas"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 rounded-lg transition-colors"
            >
              <FileText className="h-5 w-5 mr-2" />
              Ver SGSI
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/framework/overview"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fd-foreground border border-fd-border hover:bg-fd-muted/50 rounded-lg transition-colors"
            >
              <Book className="h-5 w-5 mr-2" />
              Explorar Framework
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
