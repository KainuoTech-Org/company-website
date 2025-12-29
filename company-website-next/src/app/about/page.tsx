import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6">
        
        {/* Mission Statement */}
        <section className="mb-32 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-12 text-[#1A1A1A]">
            Digital Craftsmanship for Business Growth
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            We are a digital product agency that bridges the gap between aesthetic excellence and technical robustness. Our mission is to transform your vision into scalable digital assets that drive real business results.
          </p>
        </section>

        {/* Who We Are */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="bg-gray-200 aspect-square rounded-2xl relative overflow-hidden">
             {/* Placeholder for team/office image */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif italic text-2xl">
               Our Studio
             </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Kainuo Innovision Tech is a collective of designers, engineers, and strategists. We don't just build websites; we engineer digital ecosystems.
              </p>
              <p>
                Specializing in Next.js and modern web architectures, we ensure your platform is fast, secure, and ready for the future. From Hong Kong to the world, we serve businesses that value quality and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-gray-200">
          {[
            { label: 'Years Experience', value: '5+' },
            { label: 'Projects Delivered', value: '50+' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Support', value: '24/7' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
              <div className="text-sm font-medium uppercase tracking-wider text-gray-500">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center mt-32">
          <h2 className="font-serif text-4xl font-bold mb-8">Ready to transform your digital presence?</h2>
          <Link 
            href="/contact"
            className="inline-block px-10 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#D4AF37] transition-colors"
          >
            Let's Talk
          </Link>
        </section>

      </div>
    </div>
  );
}
