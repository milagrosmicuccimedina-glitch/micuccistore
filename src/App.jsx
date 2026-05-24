import logo from "./assets/logo.png"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"


function App() {
  const [carrito, setCarrito] = useState(0)

  const agregarAlCarrito = () => {
    setCarrito(carrito + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-300">

      {/* NAVBAR */}
      <nav className="bg-black/95 backdrop-blur-md text-white p-6 flex items-center justify-between shadow-xl sticky top-0 z-50">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Micucci Store"
            className="h-14 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex gap-6 items-center text-sm md:text-base font-medium">
          <a href="#" className="hover:text-gray-300 transition">Hombre</a>
          <a href="#" className="hover:text-gray-300 transition">Mujer</a>
          <a href="#" className="hover:text-gray-300 transition">Outfits</a>

          <button className="bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition">
            🛒 {carrito}
          </button>
        </div>
      </nav>

      {/* BANNER */}
      <div className="bg-zinc-900 text-white text-center py-3 text-sm tracking-wide font-medium">
        🔥 ENVÍO GRATIS SUPERANDO LOS $100.000 • ENTREGAS EN SANTA ROSA POR UBER
      </div>

      {/* HERO */}
      <section className="text-center py-32 bg-gradient-to-r from-black to-zinc-800 text-white shadow-2xl px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-wide">
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

          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="campera"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />
            <h4 className="text-2xl font-bold">Campera Puffer</h4>
            <p className="text-gray-500 my-3">Streetwear premium unisex.</p>
            <p className="font-bold text-xl mb-4">$89.999</p>
            <button onClick={agregarAlCarrito} className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full">
              Agregar al carrito
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518"
              alt="remera"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />
            <h4 className="text-2xl font-bold">Remera Essential</h4>
            <p className="text-gray-500 my-3">Minimalismo moderno urbano.</p>
            <p className="font-bold text-xl mb-4">$39.999</p>
            <button onClick={agregarAlCarrito} className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full">
              Agregar al carrito
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-5 hover:-translate-y-2 hover:scale-105 transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
              alt="jean"
              className="rounded-2xl mb-4 h-72 w-full object-cover"
            />
            <h4 className="text-2xl font-bold">Jean Cargo</h4>
            <p className="text-gray-500 my-3">Denim urbano relajado.</p>
            <p className="font-bold text-xl mb-4">$74.999</p>
            <button onClick={agregarAlCarrito} className="bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full">
              Agregar al carrito
            </button>
          </div>

        </div>
      </section>

      {/* CONFIANZA */}
      <section className="bg-white py-16 px-10 text-center">
        <h3 className="text-3xl font-bold mb-10">
          Compra segura
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-zinc-100 rounded-3xl p-6 shadow">
            <p className="text-4xl mb-3">🚚</p>
            <p className="font-bold">Envíos a todo el país</p>
          </div>

          <div className="bg-zinc-100 rounded-3xl p-6 shadow">
            <p className="text-4xl mb-3">📍</p>
            <p className="font-bold">Uber en Santa Rosa</p>
          </div>

          <div className="bg-zinc-100 rounded-3xl p-6 shadow">
            <p className="text-4xl mb-3">💳</p>
            <p className="font-bold">Pagos seguros</p>
          </div>

          <div className="bg-zinc-100 rounded-3xl p-6 shadow">
            <p className="text-4xl mb-3">🔁</p>
            <p className="font-bold">Cambios disponibles</p>
          </div>
        </div>
      </section>

      {/* OUTFITS */}
      <section className="px-10 py-20">
        <div className="bg-black text-white rounded-[40px] p-12 text-center shadow-2xl">
          <h3 className="text-5xl font-bold mb-6">
            SET COMPLETOS
          </h3>

          <p className="text-gray-300 text-lg mb-8">
            Combinaciones urbanas premium listas para usar.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-200 transition font-bold">
            Ver outfits
          </button>
        </div>
      </section>

      {/* COMO COMPRAR */}
      <section className="bg-zinc-100 py-16 px-10 text-center">
        <h3 className="text-3xl font-bold mb-10">
          Cómo comprar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl mb-3">1</p>
            <p>Elegí tu producto</p>
          </div>

          <div>
            <p className="text-4xl mb-3">2</p>
            <p>Agregalo al carrito</p>
          </div>

          <div>
            <p className="text-4xl mb-3">3</p>
            <p>Coordinamos pago y envío</p>
          </div>

          <div>
            <p className="text-4xl mb-3">4</p>
            <p>Recibís tu pedido</p>
          </div>
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
          Micucci Store
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
          © 2026 Micucci Store. Todos los derechos reservados.
        </p>
      </footer>

     {/* WHATSAPP FLOTANTE PREMIUM */}
<a
  href="https://wa.me/5492954297815"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 z-50"
>
  <FaWhatsapp className="text-4xl" />
</a>

    </div>
  )
}

export default App