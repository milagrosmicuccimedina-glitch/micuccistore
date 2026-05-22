import { useState } from "react"

function App() {

  const [carrito, setCarrito] = useState(0)

  const agregarAlCarrito = () => {
    setCarrito(carrito + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-300">

      {/* NAVBAR */}
      <nav className="bg-black/95 backdrop-blur-md text-white p-6 flex justify-between items-center shadow-xl sticky top-0 z-50">

        <h1 className="text-3xl font-extrabold tracking-[4px]">
          MicucciStore
        </h1>

        <div className="flex gap-6 items-center text-sm md:text-base">

          <a href="#" className="hover:text-gray-300 transition">
            Hombre
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Mujer
          </a>

          <a href="#" className="hover:text-gray-300 transition">
            Outfits
          </a>

          <div className="bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg">
            🛒 {carrito}
          </div>

        </div>

      </nav>

      {/* BANNER */}
      <div className="bg-zinc-900 text-white text-center py-2 text-sm tracking-wide">
        🔥 NEW SEASON DROP • STREETWEAR PREMIUM • ENVÍOS A TODO EL PAÍS
      </div>

      {/* HERO */}
      <section className="text-center py-32 bg-gradient-to-r from-black to-zinc-800 text-white shadow-2xl">

        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-wide">
          NEW SEASON DROP
        </h2>

        <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
          Moda urbana premium para hombre y mujer inspirada en el streetwear minimalista.
        </p>

        <button className="bg-white text-black px-10 py-4 rounded-full hover:bg-zinc-200 transition duration-300 font-bold shadow-xl">
          Ver colección
        </button>

      </section>

      {/* PRODUCTOS */}
      <section className="p-10">

        <h3 className="text-4xl font-bold mb-12 text-center tracking-wide">
          Productos destacados
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* PRODUCTO 1 */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="campera"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />

            <h4 className="text-2xl font-bold">
              Campera Puffer
            </h4>

            <p className="text-gray-500 my-3">
              Streetwear premium unisex.
            </p>

            <button
              onClick={agregarAlCarrito}
              className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full"
            >
              Agregar al carrito
            </button>

          </div>

          {/* PRODUCTO 2 */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
              alt="remera"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />

            <h4 className="text-2xl font-bold">
              Remera Essential
            </h4>

            <p className="text-gray-500 my-3">
              Minimalismo moderno urbano.
            </p>

            <button
              onClick={agregarAlCarrito}
              className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full"
            >
              Agregar al carrito
            </button>

          </div>

          {/* PRODUCTO 3 */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
              alt="jean"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />

            <h4 className="text-2xl font-bold">
              Jean Cargo
            </h4>

            <p className="text-gray-500 my-3">
              Denim urbano relajado.
            </p>

            <button
              onClick={agregarAlCarrito}
              className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full"
            >
              Agregar al carrito
            </button>

          </div>

          {/* PRODUCTO 4 */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              alt="outfit"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />

            <h4 className="text-2xl font-bold">
              Urban Outfit
            </h4>

            <p className="text-gray-500 my-3">
              Outfit completo streetwear.
            </p>

            <button
              onClick={agregarAlCarrito}
              className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full"
            >
              Agregar al carrito
            </button>

          </div>

          {/* PRODUCTO 5 */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234"
              alt="sweater"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />

            <h4 className="text-2xl font-bold">
              Sweater Minimal
            </h4>

            <p className="text-gray-500 my-3">
              Elegancia simple y moderna.
            </p>

            <button
              onClick={agregarAlCarrito}
              className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full"
            >
              Agregar al carrito
            </button>

          </div>

          {/* PRODUCTO 6 */}
          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
              alt="hoodie"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />

            <h4 className="text-2xl font-bold">
              Hoodie Black
            </h4>

            <p className="text-gray-500 my-3">
              Oversize fashion style.
            </p>

            <button
              onClick={agregarAlCarrito}
              className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full"
            >
              Agregar al carrito
            </button>

          </div>

        </div>

      </section>

      {/* OUTFITS */}
      <section className="px-10 pb-20">

        <div className="bg-black text-white rounded-[40px] p-12 text-center shadow-2xl">

          <h3 className="text-5xl font-bold mb-6">
            COMPLETE OUTFITS
          </h3>

          <p className="text-gray-300 text-lg mb-8">
            Combinaciones urbanas premium listas para usar.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-200 transition font-bold">
            Ver outfits
          </button>

        </div>

      </section>

      {/* MEDIOS DE PAGO */}
      <section className="bg-white py-16 text-center shadow-inner">

        <h3 className="text-3xl font-bold mb-6">
          Medios de pago
        </h3>

        <div className="flex justify-center gap-8 text-5xl">
          💳 🏦 📱
        </div>

        <p className="text-gray-500 mt-6">
          Aceptamos tarjetas, transferencias y Mercado Pago.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-12">

        <h4 className="text-3xl font-bold mb-4 tracking-wide">
          MicucciStore
        </h4>

        <p className="text-gray-400">
          Streetwear & Minimal Fashion
        </p>

        <div className="flex justify-center gap-8 mt-6 text-xl">
          <p>📸 Instagram</p>
          <p>📱 WhatsApp</p>
          <p>✉️ Contacto</p>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 MicucciStore. Todos los derechos reservados.
        </p>

      </footer>

    </div>
  )
}

export default App