export default function SikeFashionWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-4xl">

          <h1 className="text-7xl md:text-9xl font-extrabold tracking-[0.3em] uppercase">
            SIKE
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Dark aesthetic streetwear for the new generation.
            Oversized fits. Premium vibes. Affordable drip.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition">
              Explore Collection
            </button>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Built For College Streetwear Culture
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              SIKE blends oversized fashion, dark aesthetics,
              and premium graphics into clothing made for
              everyday confidence.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1887&auto=format&fit=crop"
              alt="streetwear"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 md:px-20">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">

            <div>
              <h2 className="text-5xl font-bold">
                Featured Drops
              </h2>

              <p className="text-gray-400 mt-2">
                Latest oversized tees & aesthetic designs
              </p>
            </div>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              View All
            </button>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                name: 'Rose Oversized Tee',
                price: '₹999',
                image:
                  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1887&auto=format&fit=crop',
              },

              {
                name: 'Shadow Graphic Tee',
                price: '₹1199',
                image:
                  'https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1887&auto=format&fit=crop',
              },

              {
                name: 'Midnight Street Hoodie',
                price: '₹1899',
                image:
                  'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1887&auto=format&fit=crop',
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[420px] w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center">

                    <div>
                      <h3 className="text-2xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 mt-1">
                        {item.price}
                      </p>
                    </div>

                    <button className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:scale-105 transition">
                      Buy
                    </button>

                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-28 px-6 bg-white text-black text-center">

        <h2 className="text-6xl font-extrabold tracking-[0.2em] uppercase">
          Wear The Energy
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-xl text-zinc-700">
          Minimal. Bold. Street-ready.
          Designed to stand out without trying too hard.
        </p>

      </section>

      {/* Socials */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Follow SIKE
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Join the community and stay updated with every new drop.
          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
              Instagram
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
              TikTok
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition">
              YouTube
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6 text-center text-gray-500">
        © 2026 SIKE. All rights reserved.
      </footer>

    </div>
  );
}