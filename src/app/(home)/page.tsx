import Link from "next/link";
import { IBM_Plex_Sans } from "next/font/google";
import {
  Anvil,
  ArrowRight,
  ArrowUpRight,
  Binary,
  BookOpenText,
  Boxes,
  MessageSquareMore,
  ShieldCheck,
  Zap,
  SquareTerminal,
} from "lucide-react";

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const pillars = [
  {
    icon: Zap,
    title: "Rendimiento real",
    description:
      "Plugins diseñados para sobrevivir a servidores cargados, con estructuras limpias, persistencia seria y menos ruido innecesario.",
  },
  {
    icon: ShieldCheck,
    title: "Configuración entendible",
    description:
      "Nada de YAML caótico: menús, módulos y lógicas pensadas para modificarse rápido sin perder contexto.",
  },
  {
    icon: BookOpenText,
    title: "Wiki pensada para admins",
    description:
      "Comandos, permisos, placeholders y ejemplos útiles; menos relleno, más respuestas concretas.",
  },
];

const surfaces = [
  {
    eyebrow: "Blueprint 01",
    title:
      "Documentación que se siente como panel de control, no como folleto.",
    text: "Cada sección está planteada para ir de la instalación a la operación diaria con la menor fricción posible. La idea no es impresionar con texto, sino ayudarte a desplegar más rápido.",
    icon: Boxes,
  },
  {
    eyebrow: "Blueprint 02",
    title: "Desarrollo con estándares rigurosos.",
    text: "En ZenForge Studio no hacemos herramientas desechables. Cada línea de código y cada sistema está diseñado para escalar y soportar la presión de una comunidad activa.",
    icon: SquareTerminal,
  },
  {
    eyebrow: "Blueprint 03",
    title: "Soporte, iteración y sistemas que evolucionan.",
    text: "La documentación crece con los plugins. Nuevos módulos, placeholders, GUIs y sistemas se incorporan sin romper la navegación ni la lectura.",
    icon: Anvil,
  },
];

export default function HomePage() {
  return (
    <div
      className={`relative min-h-screen bg-[#050505] text-white ${body.variable} font-sans selection:bg-[#006bb4] selection:text-white`}
    >
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col p-6 sm:p-10 lg:p-16 gap-16 md:gap-24">
        
        {/* Simple Header */}
        <header className="flex justify-between items-center pb-6">
          <div className="text-xl font-bold flex items-center gap-2">
            <Anvil className="h-6 w-6 text-[#008cff]" />
            ZenForge
          </div>
          <Link href="/docs" className="text-sm font-medium border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 hover:text-white transition-colors text-white/70">
            Documentación
          </Link>
        </header>

        {/* HERO SECTION */}
        <section className="flex flex-col items-center text-center gap-8 mt-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#006bb4]/30 bg-[#006bb4]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider backdrop-blur-md text-[#66b8ff]">
            <ShieldCheck className="h-4 w-4" />
            System Initialization
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
            Forjamos la documentación que un servidor <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006bb4] to-[#00b4ff]">serio merece.</span>
          </h1>

          <p className="max-w-2xl text-lg text-white/60 leading-relaxed mt-4">
            ZenForge Docs reúne plugins, configuraciones y guías con una
            estructura limpia pensada para administradores que buscan eficiencia
            sin complicaciones.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/docs"
              className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#005c9e] to-[#007cd1] px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,107,180,0.3)] w-full sm:w-auto"
            >
              Entrar a la Wiki
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href="https://discord.gg/ThVDHfvqxH"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              Discord de Soporte
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#008cff]" />
            </a>
          </div>
        </section>

        {/* PILLARS GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:bg-white/[0.04] hover:border-[#006bb4]/30"
            >
              <div className="bg-[#006bb4]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-[#008cff]" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/60 leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </section>

        {/* DETAILS SECTION */}
        <section className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center backdrop-blur-md mt-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#006bb4]/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <div className="text-sm font-semibold uppercase tracking-widest text-[#008cff] mb-4">
              ZenForge Studio
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
              Herramientas creadas por administradores, para administradores.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Sabemos lo frustrante que es lidiar con sistemas a medias. Por eso, en 
              ZenForge Studio nos enfocamos en crear un ecosistema donde la estabilidad, 
              el rendimiento y la facilidad de configuración no sean opcionales, sino 
              nuestra garantía.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
             <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm flex flex-col gap-4 group hover:border-[#006bb4]/50 transition-colors">
                <Binary className="h-8 w-8 text-[#008cff] group-hover:scale-110 transition-transform" />
                <div>
                   <div className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-1">Núcleo</div>
                   <div className="text-xl font-bold">Plugins</div>
                </div>
             </div>
             <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm flex flex-col gap-4 group hover:border-[#006bb4]/50 transition-colors">
                <MessageSquareMore className="h-8 w-8 text-[#008cff] group-hover:scale-110 transition-transform" />
                <div>
                   <div className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-1">Señal</div>
                   <div className="text-xl font-bold">Clara</div>
                </div>
             </div>
          </div>
        </section>

        {/* SURFACES BLOCK */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {surfaces.map(({ eyebrow, title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm hover:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <Icon className="h-6 w-6 text-[#006bb4]" />
                <span className="text-xs uppercase font-semibold tracking-wider text-white/40">
                  {eyebrow}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-tight mb-4">
                {title}
              </h3>
              <p className="text-white/50 leading-relaxed">{text}</p>
            </article>
          ))}
        </section>

        {/* FOOTER CTA */}
        <section className="flex flex-col items-center justify-center text-center mt-8 mb-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#006bb4]/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-8 max-w-3xl relative z-10">
            Si vas a documentar software serio, hazlo fácil de leer.
          </h2>
          <Link
            href="/docs"
            className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-base font-bold text-black transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10"
          >
            Abrir Documentación
          </Link>
        </section>

      </main>
    </div>
  );
}
