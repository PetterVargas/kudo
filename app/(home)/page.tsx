'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Book, Rocket, Shield, FileText, Users, Target, Zap, CheckCircle, Layers, Database, Settings2, ShieldCheck, ClipboardCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef     = useRef<HTMLElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const svgRef      = useRef<SVGSVGElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const oscalRef    = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);
  const ctaRef      = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroEl     = heroRef.current;
    const statsEl    = statsRef.current;
    const featuresEl = featuresRef.current;
    const oscalEl    = oscalRef.current;
    const productsEl = productsRef.current;
    const ctaEl      = ctaRef.current;

    if (!heroEl || !statsEl || !featuresEl || !oscalEl || !productsEl || !ctaEl) return;

    // ── Hero diagram ──────────────────────────────────────────────────────
    const heroCtx = gsap.context(() => {
      gsap.from('.diag-node', {
        opacity: 0, y: -10, duration: 0.55, stagger: 0.09, ease: 'power2.out',
      });
      gsap.from('#node-kudo', {
        opacity: 0, y: -6, duration: 0.6, delay: 0.15, ease: 'power2.out',
      });
      gsap.from('.conn-path', {
        opacity: 0, duration: 0.45, stagger: 0.07, delay: 0.3, ease: 'power2.out',
      });
      gsap.from('.gsap-hi', {
        y: 22, opacity: 0, duration: 0.7, stagger: 0.13, delay: 0.65, ease: 'power3.out',
      });
      gsap.to('#kudo-glow-fill', {
        opacity: 0.14, duration: 1.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5,
      });

      if (svgRef.current) {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((n, i) => {
          const path = svgRef.current!.querySelector<SVGPathElement>(`#conn-${n}`);
          const dot  = svgRef.current!.querySelector<SVGCircleElement>(`#dot-${n}`);
          if (!path || !dot) return;
          const len   = path.getTotalLength();
          const state = { t: 0 };
          gsap.to(state, {
            t: 1, duration: 2.4, repeat: -1, delay: i * 0.42, ease: 'none',
            onUpdate() {
              const pt = path.getPointAtLength(state.t * len);
              gsap.set(dot, { attr: { cx: pt.x, cy: pt.y } });
            },
          });
        });
      }
    }, heroEl);

    // ── Value proposition ─────────────────────────────────────────────────
    const statsCtx = gsap.context(() => {
      gsap.from('.stats-header', {
        y: 22, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.stats-header', start: 'top 85%', once: true },
      });
      gsap.from('.gsap-stat', {
        y: 18, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.gsap-stats-grid', start: 'top 85%', once: true },
      });
      document.querySelectorAll<HTMLElement>('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count!);
        const suffix = el.dataset.suffix ?? '';
        ScrollTrigger.create({
          trigger: el, start: 'top 88%', once: true,
          onEnter() {
            const obj = { v: 0 };
            gsap.to(obj, {
              v: target, duration: 1.2, ease: 'power2.out',
              onUpdate() { el.textContent = Math.round(obj.v) + suffix; },
            });
          },
        });
      });
    }, statsEl);

    // ── Features ──────────────────────────────────────────────────────────
    const featuresCtx = gsap.context(() => {
      gsap.from('.features-title', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.features-title', start: 'top 85%', once: true },
      });
      gsap.utils.toArray<Element>('.features-item').forEach((el, i) => {
        gsap.from(el, {
          x: -24, opacity: 0, duration: 0.5, delay: i * 0.08, ease: 'power2.out',
          scrollTrigger: { trigger: el as Element, start: 'top 88%', once: true },
        });
      });
      gsap.from('.features-card', {
        x: 24, opacity: 0, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: '.features-card', start: 'top 85%', once: true },
      });
    }, featuresEl);

    // ── OSCAL ─────────────────────────────────────────────────────────────
    const oscalCtx = gsap.context(() => {
      gsap.from('.oscal-header', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.oscal-header', start: 'top 85%', once: true },
      });
      gsap.from('.oscal-layer', {
        y: 18, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: '.oscal-layers', start: 'top 85%', once: true },
      });
      gsap.from('.oscal-cta', {
        y: 16, opacity: 0, duration: 0.5, delay: 0.3, ease: 'power2.out',
        scrollTrigger: { trigger: '.oscal-header', start: 'top 85%', once: true },
      });
    }, oscalEl);

    // ── Products ──────────────────────────────────────────────────────────
    const productsCtx = gsap.context(() => {
      gsap.from('.products-header', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: '.products-header', start: 'top 85%', once: true },
      });
      gsap.utils.toArray<Element>('.product-card').forEach((el, i) => {
        gsap.from(el, {
          y: 28, opacity: 0, duration: 0.6, delay: i * 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: el as Element, start: 'top 88%', once: true },
        });
      });
    }, productsEl);

    // ── CTA ───────────────────────────────────────────────────────────────
    const ctaCtx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-content', start: 'top 85%', once: true },
      });
    }, ctaEl);

    return () => {
      heroCtx.revert();
      statsCtx.revert();
      featuresCtx.revert();
      oscalCtx.revert();
      productsCtx.revert();
      ctaCtx.revert();
    };
  }, []);

  return (
    <main className="flex flex-1 flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))] font-sans">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 via-transparent to-fd-secondary/5 pointer-events-none" />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none text-fd-foreground"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.7" fill="currentColor" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        <div className="w-full">
          <svg
            ref={svgRef}
            viewBox="0 0 1200 185"
            className="w-full text-fd-foreground"
            aria-hidden="true"
            style={{ display: 'block' }}
          >
            <defs>
              <filter id="kudo-glow" x="-15%" y="-20%" width="130%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path id="conn-1" className="conn-path"
              d="M135,20 C295,18 375,70 474,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-2" className="conn-path"
              d="M177,154 C310,148 390,112 474,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-3" className="conn-path"
              d="M222,109 C334,107 402,94 474,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-4" className="conn-path"
              d="M300,58 C380,60 440,70 474,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />

            <path id="conn-5" className="conn-path"
              d="M1065,24 C905,22 822,58 726,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-6" className="conn-path"
              d="M982,134 C900,130 830,108 726,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-7" className="conn-path"
              d="M1010,102 C930,100 840,88 726,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-8" className="conn-path"
              d="M815,164 C783,154 758,118 726,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />
            <path id="conn-9" className="conn-path"
              d="M890,62 C845,62 792,70 726,79"
              fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="5 4" />

            <g className="diag-node">
              <rect x="-20" y="8" width="155" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="57" y="24" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Análisis Personal</text>
            </g>

            <g className="diag-node">
              <rect x="32" y="142" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="105" y="158" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Incidentes</text>
            </g>

            <g className="diag-node">
              <rect x="112" y="97" width="110" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="167" y="113" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Leyes</text>
            </g>

            <g className="diag-node">
              <rect x="155" y="46" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="228" y="62" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Experiencia</text>
            </g>

            <g className="diag-node">
              <rect x="1065" y="12" width="155" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="1142" y="28" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Metodología</text>
            </g>

            <g className="diag-node">
              <rect x="982" y="122" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="1055" y="138" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Regulaciones</text>
            </g>

            <g className="diag-node">
              <rect x="1010" y="90" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="1083" y="106" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Procesos</text>
            </g>

            <g className="diag-node">
              <rect x="815" y="152" width="145" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="888" y="168" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Controles</text>
            </g>

            <g className="diag-node">
              <rect x="890" y="50" width="168" height="24" rx="3"
                fill="transparent" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="5 3" />
              <text x="974" y="66" textAnchor="middle" fontSize="11"
                fill="currentColor" opacity="0.55" fontWeight="500">Buenas Prácticas</text>
            </g>

            <g id="node-kudo">
              <rect id="kudo-glow-fill" x="468" y="51" width="264" height="57" rx="7"
                fill="#4DAE84" opacity="0.04" />
              <rect x="474" y="57" width="252" height="45" rx="4"
                fill="transparent" stroke="#4DAE84" strokeWidth="1.5"
                filter="url(#kudo-glow)" />
              <rect x="482" y="63" width="76" height="33" rx="2"
                fill="transparent" stroke="#4DAE84" strokeWidth="1" strokeOpacity="0.38" strokeDasharray="4 3" />
              <text x="520" y="83" textAnchor="middle" fontSize="9" fill="#4DAE84" opacity="0.8">Framework</text>
              <rect x="562" y="63" width="76" height="33" rx="2"
                fill="transparent" stroke="#4DAE84" strokeWidth="1" strokeOpacity="0.38" strokeDasharray="4 3" />
              <text x="600" y="83" textAnchor="middle" fontSize="9" fill="#4DAE84" opacity="0.8">OSCAL</text>
              <rect x="642" y="63" width="76" height="33" rx="2"
                fill="transparent" stroke="#4DAE84" strokeWidth="1" strokeOpacity="0.38" strokeDasharray="4 3" />
              <text x="680" y="83" textAnchor="middle" fontSize="9" fill="#4DAE84" opacity="0.8">SGSI</text>
              <rect x="470" y="53" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="722" y="53" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="470" y="98" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="722" y="98" width="8" height="8" rx="1" fill="#4DAE84" />
              <rect x="596" y="53" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
              <rect x="596" y="98" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
              <rect x="470" y="76" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
              <rect x="722" y="76" width="8" height="8" rx="1" fill="#4DAE84" opacity="0.45" />
            </g>

            <circle id="dot-1" r="3.5" fill="#4DAE84" cx="135" cy="20" />
            <circle id="dot-2" r="3.5" fill="#4DAE84" cx="177" cy="154" />
            <circle id="dot-3" r="3.5" fill="#4DAE84" cx="222" cy="109" />
            <circle id="dot-4" r="3.5" fill="#4DAE84" cx="300" cy="58" />
            <circle id="dot-5" r="3.5" fill="#4DAE84" cx="1065" cy="24" />
            <circle id="dot-6" r="3.5" fill="#4DAE84" cx="982" cy="134" />
            <circle id="dot-7" r="3.5" fill="#4DAE84" cx="1010" cy="102" />
            <circle id="dot-8" r="3.5" fill="#4DAE84" cx="815" cy="164" />
            <circle id="dot-9" r="3.5" fill="#4DAE84" cx="890" cy="62" />
          </svg>
        </div>

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

      <section className="py-20 px-4 bg-fd-muted/50">
        <div ref={statsRef} className="max-w-6xl mx-auto">
          <div className="stats-header text-center mb-16">
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
                <span data-count="35" data-suffix="">35</span> Controles
              </h4>
              <p className="text-fd-muted-foreground">
                Marco completo con 35 controles de Ciberseguridad
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

      <section ref={featuresRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="features-title text-3xl font-bold mb-6">¿Por qué usar Kudo?</h3>
              <div className="space-y-4">
                <div className="features-item flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Confianza entre partes interesadas</h4>
                    <p className="text-fd-muted-foreground text-sm">Aplica a inversores, gobiernos, empresas, clientes y usuarios</p>
                  </div>
                </div>
                <div className="features-item flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Marco de referencia</h4>
                    <p className="text-fd-muted-foreground text-sm">Establece políticas comunes para gestión de ciberseguridad</p>
                  </div>
                </div>
                <div className="features-item flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Capacitación de equipos</h4>
                    <p className="text-fd-muted-foreground text-sm">Formación inicial y continua de colaboradores</p>
                  </div>
                </div>
                <div className="features-item flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Auditorías simplificadas</h4>
                    <p className="text-fd-muted-foreground text-sm">Enfoque estructurado para evaluaciones internas y externas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-card bg-fd-card border border-fd-border/70 rounded-xl p-8 shadow-md">
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

      <section ref={oscalRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="oscal-header text-center mb-12">
            <div className="w-14 h-14 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="h-7 w-7 text-fd-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Kudo adaptado a OSCAL</h3>
            <p className="text-xl text-fd-muted-foreground max-w-2xl mx-auto">
              Los 35 controles de Kudo expresados según OSCAL (Open Security Controls Assessment Language),
              el estándar de NIST para intercambiar información de controles de seguridad.
            </p>
          </div>

          <div className="oscal-layers grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="oscal-layer flex flex-col gap-3 p-6 rounded-xl border border-fd-border/60 bg-fd-card/40">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-fd-primary" />
                <h4 className="font-semibold">Capa de Control</h4>
              </div>
              <p className="text-fd-muted-foreground text-sm">Catalog &amp; Profile</p>
            </div>
            <div className="oscal-layer flex flex-col gap-3 p-6 rounded-xl border border-fd-border/60 bg-fd-card/40">
              <div className="flex items-center gap-3">
                <Settings2 className="h-5 w-5 text-fd-primary" />
                <h4 className="font-semibold">Capa de Implementación</h4>
              </div>
              <p className="text-fd-muted-foreground text-sm">Component Definition &amp; SSP</p>
            </div>
            <div className="oscal-layer flex flex-col gap-3 p-6 rounded-xl border border-fd-border/60 bg-fd-card/40">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-fd-primary" />
                <h4 className="font-semibold">Capa de Evaluación</h4>
              </div>
              <p className="text-fd-muted-foreground text-sm">AP, AR &amp; POA&amp;M</p>
            </div>
          </div>

          <div className="oscal-cta text-center">
            <Link
              href="/framework/oscal"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 active:scale-95 rounded-lg transition-all duration-200 hover:scale-[1.03]"
            >
              <ClipboardCheck className="h-5 w-5" />
              Ver adaptación a OSCAL
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section ref={productsRef} className="py-20 px-4 bg-fd-muted/40">
        <div className="max-w-6xl mx-auto">
          <div className="products-header text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Productos Complementarios</h3>
            <p className="text-xl text-fd-muted-foreground">
              Además de Kudo, explora nuestros otros recursos de Ciberseguridad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="https://cyberacademy.divisioncero.com/"
              className="product-card group flex flex-col gap-4 p-8 rounded-xl border border-fd-border/60 bg-fd-card/40 hover:border-fd-foreground/40 hover:bg-fd-card/70 transition-all duration-200 shadow-md"
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
              className="product-card group flex flex-col gap-4 p-8 rounded-xl border border-fd-border/60 bg-fd-card/40 hover:border-fd-foreground/40 hover:bg-fd-card/70 transition-all duration-200 shadow-md"
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

      <section ref={ctaRef} className="py-20 px-4">
        <div className="cta-content max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Comienza tu implementación hoy</h3>
          <p className="text-xl text-fd-muted-foreground mb-8">
            Accede a más de 25 templates de políticas organizacionales y construye un marco de ciberseguridad sólido
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sgsi/"
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
