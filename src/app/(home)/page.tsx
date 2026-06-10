import Link from 'next/link';
import { Zap, BookOpen, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-fd-background text-fd-foreground overflow-hidden">
      
      {/* Dynamic Background Ambient Gradients in Blue and Cyan */}
      <div className="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/15 via-cyan-600/10 to-transparent blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-cyan-500/10 via-blue-600/5 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-[30%] left-[45%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />

      {/* Grid Pattern overlay for tech/forge aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Content Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-16 md:py-28 flex flex-col gap-24 relative z-10">
        
        {/* Customized Hero Section */}
        <section className="flex flex-col items-center text-center gap-10 pt-4">
          
          {/* Glowing Blue/Cyan Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs md:text-sm font-semibold text-cyan-400 tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.05)] animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>LA FORJA DE PLUGINS DE ALTA GAMA</span>
          </div>

          {/* Core Interactive Centerpiece (A Clean Diamond with Simple Hover Effect, No Spinning) */}
          <div className="relative flex items-center justify-center w-48 h-48 group cursor-pointer">
            {/* Glowing Blue/Cyan Aura on Hover */}
            <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-20 blur-2xl group-hover:opacity-50 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
            
            {/* Static Clean Concentric Tech Borders that react to hover */}
            <div className="absolute w-28 h-28 border border-blue-500/25 rounded-2xl group-hover:scale-105 group-hover:border-cyan-400/40 transition-all duration-500" />
            <div className="absolute w-32 h-32 border border-dashed border-cyan-500/10 rounded-[35%] group-hover:scale-110 transition-all duration-500" />
            
            {/* The Forge Core Diamond - Pure Blue & Cyan with Simple Hover Rotate/Scale Shift */}
            <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_35px_rgba(6,182,212,0.45)] border border-cyan-300/30 transform transition-all duration-500 group-hover:rotate-[50deg] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(6,182,212,0.7)]">
              {/* Inner Initials */}
              <div className="-rotate-45 text-black font-black text-2xl tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                ZF
              </div>
              <div className="absolute inset-1 border border-white/25 rounded-xl pointer-events-none" />
            </div>

            {/* Subtle floating glow points */}
            <div className="absolute top-6 left-10 w-1.5 h-1.5 rounded-full bg-cyan-300 blur-[0.5px] opacity-70" />
            <div className="absolute bottom-8 right-12 w-1.5 h-1.5 rounded-full bg-blue-300 blur-[0.5px] opacity-70" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-5 max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none">
              Forjando la Excelencia en{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent font-black drop-shadow-[0_2px_15px_rgba(6,182,212,0.25)]">
                Minecraft
              </span>
            </h1>
            <p className="text-lg md:text-xl text-fd-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Documentación técnica avanzada de nuestros plugins. Optimizados al extremo, robustos por naturaleza y creados para llevar tu servidor al siguiente nivel.
            </p>
          </div>

          {/* Actions with Blue/Cyan Gradients */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/docs" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] shadow-lg"
            >
              Comenzar a Leer
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a 
              href="https://discord.gg/ThVDHfvqxH" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-fd-card/40 backdrop-blur-md border border-fd-border/60 hover:bg-fd-accent/20 hover:border-blue-500/50 hover:text-cyan-400 text-fd-foreground font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.03]"
            >
              Comunidad en Discord
              <Terminal className="w-5 h-5 opacity-70" />
            </a>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid md:grid-cols-3 gap-6">
          
          <div className="group relative flex flex-col gap-4 p-8 bg-fd-card/30 backdrop-blur-md border border-fd-border/30 hover:border-blue-500/40 hover:bg-fd-card/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 rounded-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">Alto Rendimiento</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Algoritmos y almacenamiento asíncrono optimizados para mantener el TPS de tu servidor al 100% de su capacidad.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col gap-4 p-8 bg-fd-card/30 backdrop-blur-md border border-fd-border/30 hover:border-cyan-500/40 hover:bg-fd-card/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 rounded-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">Estabilidad Total</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Código estructurado y libre de fugas de memoria, testeado rigurosamente en entornos de alta demanda.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col gap-4 p-8 bg-fd-card/30 backdrop-blur-md border border-fd-border/30 hover:border-blue-500/40 hover:bg-fd-card/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 rounded-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">Documentación Completa</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Cada comando, permiso, configuración y API explicados detalladamente con ejemplos listos para drop-in.
              </p>
            </div>
          </div>

        </section>

        {/* Section: ZenForge Philosophy */}
        <section className="flex flex-col gap-10 py-6 border-t border-fd-border/40">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-center">Nuestra Filosofía de Trabajo</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3 p-6 bg-fd-card/20 border border-fd-border/20 rounded-2xl">
              <div className="text-lg font-bold flex items-center gap-2 text-cyan-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-xs text-blue-400 font-bold">1</span>
                Diseño Centrado en la Facilidad
              </div>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Nuestros archivos de configuración (`config.yml`, `menu.yml`) están diseñados de forma intuitiva, permitiéndote cambiar cualquier interfaz gráfica (GUI) o comportamiento del plugin sin reiniciar tu servidor.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 bg-fd-card/20 border border-fd-border/20 rounded-2xl">
              <div className="text-lg font-bold flex items-center gap-2 text-cyan-400">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-xs text-cyan-400 font-bold">2</span>
                Soporte de Comunidad de Primera
              </div>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                Ofrecemos asistencia directa e integral en nuestro servidor de Discord. Creemos que una gran herramienta no está completa sin una comunidad dedicada y un equipo de desarrolladores dispuesto a guiarte.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-3xl p-8 md:p-14 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-fd-border/30 overflow-hidden text-center flex flex-col items-center gap-6 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full" />

          <h2 className="text-2xl md:text-3.5xl font-extrabold tracking-tight">¿Tienes alguna duda o necesitas ayuda?</h2>
          <p className="text-fd-muted-foreground max-w-2xl leading-relaxed">
            Nuestro servidor de Discord es el canal ideal para obtener soporte instantáneo, interactuar con otros administradores, sugerir características e informarte de nuevas actualizaciones.
          </p>

          <a 
            href="https://discord.gg/ThVDHfvqxH" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transform hover:scale-[1.02]"
          >
            Únete a ZenForge en Discord
            <MessageSquare className="w-5 h-5" />
          </a>
        </section>

      </main>
    </div>
  );
}
