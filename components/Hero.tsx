'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-fresno-primary to-fresno-secondary py-20 md:py-32 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 leading-tight">
            Five59ineHub™ — Fresno Resource Hub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            One Hub. Every Resource. We Got You!
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-85">
            A single-source community resource directory for Fresno County residents. 
            Lists local organizations, events, and the Fresno City Council districts with meeting links.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-fresno-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Find Resources
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-fresno-primary transition">
              City Council
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
