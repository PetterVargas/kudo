import Link from 'next/link';
import { ArrowRight, Book, Rocket, Shield, FileText, Users, Target, Zap, Globe, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col min-h-[calc(100vh-var(--header-height)-var(--footer-height))] font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 via-transparent to-fd-secondary/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center mb-8">
            <svg
              width={120}
              className="w-[100px] lg:w-[120px] mb-6"
              viewBox="0 0 2048 783"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={'dark:fill-white'}
                transform="translate(746,1)"
                d="m0 0 13 2 9 4 6 4 8 9 5 11 1 10v591l-1 17-4 10-8 10-8 5-21 7-69 19-212 58-59 16-5 1h-14l-45-12-62-17-117-32-62-17-58-16-16-5-8-4-8-7-6-10-2-6-1-7-1-233v-97l1-233 1-46 4-11 6-8 7-6 10-5 3-1h12l28 7 44 12 73 20 149 41 47 13 11 2 50-14 47-13 225-62zm-39 92-35 9-65 18-166 46-35 10-14 2-31-8-229-63-47-13h-3l-1 177v336l8 3 47 13 132 37 107 30 17 5 8-1 128-35 135-37 37-10 8-3 1-515z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(149,219)"
                d="m0 0h490l14 7 9 9 6 12 2 15v15l-1 20-1 1h-470v221l12 3 119 33 50 14 17 4 13-4 68-19 119-33 69-19 4 1v57l-3 10-6 9-5 5-7 5-27 8-214 60-9 2h-9l-122-34-82-23-42-12-10-6-7-8-6-12-2-11v-291l2-10 7-14 7-7 10-6z"
                fill="#4DAE84"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1463,332)"
                d="m0 0h131l17 3 16 6 11 6 12 9 10 9 9 10 10 15 6 14 4 15 2 13v28l-4 20-4 12-7 13-8 11-9 10-13 11-15 9-4 2 2 6 10 19 15 28 17 32 15 29 6 12-4 1h-69l-6-9-18-34-12-22-14-27-12-22-1-1-33-1v113l-1 2-41 1h-25l-3-2-1-204v-41l1-95zm60 67-1 15v77h56l11-2 10-6 10-9 7-12 3-15-1-13-4-11-8-11-11-8-10-4-6-1z"
                fill="#4DAE84"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1859,332)"
                d="m0 0h36l20 3 21 6 21 10 18 12 10 8 12 11 8 8 11 14 9 14 8 16 8 20 7 29v44l-8 32-9 22-10 18-13 17-13 14-11 9-14 10-14 8-19 8-22 6-17 3-10 1h-23l-21-3-24-6-19-8-15-8-14-10-12-11-12-12-13-17-11-19-8-18-6-20-4-24v-28l3-22 5-19 6-16 11-21 8-12 7-9 11-12 7-7 13-10 14-9 15-8 18-7 21-5zm6 64-17 3-12 4-15 8-13 10-10 10-9 12-8 15-6 18-2 12-1 21 2 18 4 15 5 12 6 11 9 11 5 6 14 11 15 9 12 5 17 4 10 1h16l16-3 14-5 15-8 10-8 13-12 10-13 8-16 5-15 2-11v-33l-3-15-6-16-9-16-8-10-6-7-14-11-16-9-14-5-17-3z"
                fill="#4DAE84"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1201,332)"
                d="m0 0h201l6 1 1 13v51l-2 2h-139l1 71h138l1 1v64l-4 1h-136v71l140 1v65l-1 1-138 1h-68l-1-5-1-242 1-95z"
                fill="#4DAE84"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1015,332)"
                d="m0 0h34l20 3 21 6 16 7 15 8 17 12 15 13 12 13 1 6-15 14-11 9-14 13-3 3-4-2-11-12-11-9-16-10-15-6-16-4-8-1h-21l-20 4-16 6-15 9-10 8-11 11-9 13-8 15-5 15-3 16v23l3 16 4 12 8 16 9 13 11 12 17 12 16 8 16 5 12 2h26l17-4 13-5 15-8 12-9 9-8 6-8 4-1 11 9 13 11 8 7 10 9 3 4-8 10-17 17-16 12-18 10-16 7-20 6-21 4-10 1h-21l-20-3-20-5-18-7-16-8-15-10-10-8-12-11-11-12-12-17-9-16-6-14-6-19-4-20-1-13v-18l2-19 4-18 7-20 8-16 7-12 11-15 11-12 9-9 13-10 14-9 17-9 17-6 20-5z"
                fill="#4DAE84"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1903,108)"
                d="m0 0 36 1 6 8 12 19 15 23 25 38 9 14 4 4v-106h38v177l-3 1h-32l-6-7-29-44-27-41-8-12-5-4 1 2v105l-1 1h-35l-1-1v-177z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(859,109)"
                d="m0 0h80l16 3 12 5 11 8 10 10 7 10 7 14 4 13 2 13v23l-3 17-6 16-8 13-11 13-11 8-10 5-14 4-13 2-15 1h-57l-1-2zm37 34v107h27l12-2 13-5 9-7 7-9 5-14 1-5v-22l-4-15-6-10-8-8-10-5-16-4-9-1z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1749,108)"
                d="m0 0h17l17 2 13 5 12 7 14 12 10 13 6 11 5 12 3 12 1 8v14l-3 18-5 14-8 14-9 11-9 8-14 9-16 6-18 3h-18l-16-3-14-5-13-8-12-11-8-9-8-14-5-12-4-18v-20l4-18 6-15 7-11 9-10 7-7 10-7 12-6 9-3zm-3 34-13 4-11 8-9 10-7 14-2 8-1 14 2 13 4 10 6 10 9 9 10 6 12 4 5 1h12l14-4 12-7 8-7 7-10 5-12 1-5v-20l-4-14-6-10-9-10-10-7-10-4-5-1z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1489,108)"
                d="m0 0h11l15 2 13 7 13 12 5 6-2 4-11 10-8 7-4 3-4-2-9-10-8-4-8-1-7 4-2 6 4 6 11 11 11 9 10 9 8 7 10 10 6 10 4 9 1 5v20l-4 12-8 11-9 8-10 5-15 3h-16l-12-3-10-5-12-10-9-12-4-7 1-4 22-13 4-3 4 1 8 11 8 7 6 3h8l8-4 4-5v-8l-6-10-11-10-11-9-15-14-10-10-9-14-3-9-1-9 2-11 7-14 9-9 11-6z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1141,108)"
                d="m0 0 38 1 4 10 21 60 27 75 10 29-1 3-3 1h-33l-3-4-35-98-15-43-11-31z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1580,108)"
                d="m0 0 36 1v177l-1 1h-35l-1-1-1-145 1-32z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1051,109)"
                d="m0 0h37v178h-36l-1-1z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1350,109)"
                d="m0 0h37l1 4-1 173-2 1h-34l-1-4z"
                fill="#1B2433"
              />
              <path
                className={'dark:fill-white'}
                transform="translate(1264,109)"
                d="m0 0h39l-3 9-14 40-20 55-10 28-4 11h-2l-5-12-13-37v-8l11-29 15-42z"
                fill="#1B2433"
              />
            </svg>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
            Kudo
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-fd-foreground">
            Framework de Ciberseguridad por y para LatAm
          </h2>
          <p className="text-xl text-fd-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Marco completo de políticas, procedimientos y controles de Ciberseguridad. 
            Más de 25 templates organizacionales listos para implementar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/framework"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 rounded-lg transition-colors"
            >
              Explorar Framework 
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-fd-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">La fórmula es simple</h3>
            <div className="text-2xl font-mono bg-fd-card border rounded-lg py-6 px-4 inline-block">
              <span className="text-fd-primary">Coherencia</span> + Confianza = <span className="text-fd-foreground font-bold">Ciberseguridad</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-fd-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">8 Dominios</h4>
              <p className="text-fd-muted-foreground">
                Controles organizados por dominios de seguridad para una implementación estructurada
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-fd-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">36 Controles</h4>
              <p className="text-fd-muted-foreground">
                Marco completo con 36 controles de Ciberseguridad
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-fd-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3">25+ Políticas</h4>
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
              href="https://divisioncero.com/cursos"
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
              href="/politicas"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fd-primary-foreground bg-fd-primary hover:bg-fd-primary/90 rounded-lg transition-colors"
            >
              <FileText className="h-5 w-5 mr-2" />
              Ver Políticas Templates
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

