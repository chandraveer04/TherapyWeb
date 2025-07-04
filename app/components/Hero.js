import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
              8+ Years Experience
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium">
              500+ Sessions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
            Find Your Path to <span className="text-teal-400">Emotional Wellness</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-6 font-light text-white/90">
            Dr. Serena Blake, Clinical Psychologist in Los Angeles, CA
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/80">
            Compassionate therapy for anxiety, relationships, and trauma recovery in a safe, supportive environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/#contact" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md inline-block transition-colors text-center"
            >
              Book a Free Consultation
            </Link>
            <Link 
              href="/#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-medium py-3 px-8 rounded-md inline-block transition-colors text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
} 