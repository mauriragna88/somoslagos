import Image from "next/image";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-8 pb-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="SomosLagos"
              width={280}
              height={280}
              className="rounded-2xl"
              priority
            />
          </div>
        </header>

        {/* Hero Section */}
        <main className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Hero image */}
            <div className="animate-fade-in-up mt-6 mb-8">
              <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="Lagos de Moreno"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm sm:text-base font-medium opacity-90">
                    El directorio de negocios de
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
                    Lagos de Moreno
                  </h2>
                </div>
              </div>
            </div>

            {/* Próximamente badge */}
            <div className="animate-fade-in-up-delay text-center mb-8">
              <div className="inline-block animate-float">
                <span className="bg-amber-500 text-white text-lg sm:text-xl font-black px-8 py-3 rounded-full shadow-lg shadow-amber-500/30 tracking-wider uppercase">
                  Próximamente
                </span>
              </div>
              <p className="mt-6 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Estamos construyendo la plataforma donde podrás{" "}
                <strong className="text-gray-800">
                  dar a conocer tu negocio
                </strong>{" "}
                a toda la comunidad de Lagos de Moreno.
              </p>
            </div>

            {/* Benefits */}
            <div className="animate-fade-in-up-delay grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 text-center border border-amber-100 shadow-sm">
                <div className="text-3xl mb-2">📍</div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Visibilidad local
                </h3>
                <p className="text-sm text-gray-500">
                  Miles de personas encontrarán tu negocio
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 text-center border border-amber-100 shadow-sm">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Registro gratis
                </h3>
                <p className="text-sm text-gray-500">
                  Registra tu negocio sin costo al inicio
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 text-center border border-amber-100 shadow-sm">
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="font-bold text-gray-800 mb-1">
                  Sé el primero
                </h3>
                <p className="text-sm text-gray-500">
                  Regístrate hoy y obtén prioridad
                </p>
              </div>
            </div>

            {/* Signup Form */}
            <div className="animate-fade-in-up-delay-2 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 sm:p-8 border border-amber-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                  Registra tu negocio antes del lanzamiento
                </h3>
                <p className="text-gray-500 text-center mb-6">
                  Déjanos tus datos y serás de los primeros en aparecer en
                  SomosLagos
                </p>
                <SignupForm />
              </div>
            </div>

            {/* Social / Footer */}
            <footer className="mt-12 text-center pb-8">
              <p className="text-gray-400 text-sm mb-3">Síguenos en</p>
              <a
                href="https://www.facebook.com/devogatec?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
              <div className="mt-8 flex flex-col items-center gap-2">
                <Image
                  src="/images/logo2.jpg"
                  alt="Devogatec"
                  width={120}
                  height={120}
                  className="rounded-xl"
                />
                <p className="text-gray-300 text-xs">
                  &copy; {new Date().getFullYear()} Devogatec. Todos los derechos
                  reservados.
                </p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
