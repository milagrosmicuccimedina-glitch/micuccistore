import logo from "./assets/logo.png"
import { useEffect, useRef, useState } from "react"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { productos } from "./productos"

const WHATSAPP = "5492954297815"
// Completá con el link de tu Instagram para que aparezca en el footer
const INSTAGRAM_URL = ""
const ENVIO_GRATIS_DESDE = 100000
const CARRITO_KEY = "micucci-carrito"

const formatearPrecio = (valor) => "$" + valor.toLocaleString("es-AR")

const linkWhatsapp = (mensaje) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`

const cargarCarrito = () => {
  try {
    const guardado = JSON.parse(localStorage.getItem(CARRITO_KEY)) || []
    return guardado.filter(
      (item) =>
        productos.some((p) => p.id === item.id && p.talles.includes(item.talle)) &&
        item.cantidad > 0
    )
  } catch {
    return []
  }
}

function TarjetaProducto({ producto, onAgregar }) {
  const [talle, setTalle] = useState(null)

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-5 md:hover:-translate-y-2 transition duration-300 flex flex-col">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        loading="lazy"
        className="rounded-2xl mb-4 h-72 w-full object-cover"
      />
      <h4 className="text-2xl font-bold">{producto.nombre}</h4>
      <p className="text-gray-500 my-3">{producto.descripcion}</p>
      <p className="font-bold text-xl mb-4">{formatearPrecio(producto.precio)}</p>

      <div className="mb-5">
        <p className="text-sm font-medium text-gray-600 mb-2">Talle</p>
        <div className="flex flex-wrap gap-2">
          {producto.talles.map((t) => (
            <button
              key={t}
              onClick={() => setTalle(t)}
              aria-pressed={talle === t}
              className={`min-w-11 h-11 px-3 rounded-full border font-semibold transition ${
                talle === t
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-zinc-300 hover:border-black"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => onAgregar(producto, talle)}
        disabled={!talle}
        className="mt-auto bg-black text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition w-full disabled:bg-zinc-300 disabled:text-zinc-600 disabled:cursor-not-allowed"
      >
        {talle ? "Agregar al carrito" : "Elegí tu talle"}
      </button>
    </div>
  )
}

function PanelCarrito({ items, onCerrar, onCambiarCantidad, onQuitar }) {
  const lineas = items.map((item) => ({
    ...item,
    producto: productos.find((p) => p.id === item.id),
  }))
  const total = lineas.reduce((suma, l) => suma + l.producto.precio * l.cantidad, 0)
  const faltaParaEnvioGratis = ENVIO_GRATIS_DESDE - total

  const mensaje = [
    "¡Hola! Quiero hacer este pedido:",
    "",
    ...lineas.map(
      (l) =>
        `• ${l.cantidad}x ${l.producto.nombre} (talle ${l.talle}) – ${formatearPrecio(
          l.producto.precio * l.cantidad
        )}`
    ),
    "",
    `Total: ${formatearPrecio(total)}`,
    "",
    "¿Cómo coordinamos el pago y el envío?",
  ].join("\n")

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Carrito">
      <div className="absolute inset-0 bg-black/50" onClick={onCerrar} />

      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-bold">Tu carrito</h3>
          <button
            onClick={onCerrar}
            aria-label="Cerrar carrito"
            className="w-10 h-10 rounded-full hover:bg-zinc-100 text-2xl"
          >
            ×
          </button>
        </div>

        {lineas.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <p className="text-5xl mb-4">🛒</p>
            <p className="text-gray-500 mb-6">Tu carrito está vacío.</p>
            <button
              onClick={onCerrar}
              className="bg-black text-white px-6 py-3 rounded-full font-bold"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-6 space-y-5">
              {lineas.map((l) => (
                <li key={`${l.id}-${l.talle}`} className="flex gap-4">
                  <img
                    src={l.producto.imagen}
                    alt={l.producto.nombre}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{l.producto.nombre}</p>
                    <p className="text-sm text-gray-500">Talle {l.talle}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onCambiarCantidad(l.id, l.talle, -1)}
                        aria-label="Restar uno"
                        className="w-8 h-8 rounded-full border border-zinc-300 hover:border-black"
                      >
                        −
                      </button>
                      <span className="font-semibold w-4 text-center">{l.cantidad}</span>
                      <button
                        onClick={() => onCambiarCantidad(l.id, l.talle, 1)}
                        aria-label="Sumar uno"
                        className="w-8 h-8 rounded-full border border-zinc-300 hover:border-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      {formatearPrecio(l.producto.precio * l.cantidad)}
                    </p>
                    <button
                      onClick={() => onQuitar(l.id, l.talle)}
                      className="text-sm text-gray-500 underline hover:text-black mt-2"
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t p-6 space-y-4">
              <p className="text-sm text-center">
                {faltaParaEnvioGratis > 0
                  ? `Te faltan ${formatearPrecio(faltaParaEnvioGratis)} para el envío gratis 🚚`
                  : "¡Tenés envío gratis! 🎉"}
              </p>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>{formatearPrecio(total)}</span>
              </div>
              <a
                href={linkWhatsapp(mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-4 rounded-full font-bold hover:brightness-95 transition"
              >
                <FaWhatsapp className="text-2xl" />
                Finalizar pedido por WhatsApp
              </a>
              <p className="text-xs text-gray-500 text-center">
                Te respondemos para coordinar el pago y el envío.
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

function App() {
  const [carrito, setCarrito] = useState(cargarCarrito)
  const [carritoAbierto, setCarritoAbierto] = useState(false)
  const [categoria, setCategoria] = useState("todos")
  const [aviso, setAviso] = useState(null)
  const timerAviso = useRef(null)

  useEffect(() => {
    try {
      localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito))
    } catch {
      // Sin acceso al almacenamiento: el carrito vive solo en esta visita
    }
  }, [carrito])

  useEffect(() => {
    if (!carritoAbierto) return
    const alPresionar = (e) => e.key === "Escape" && setCarritoAbierto(false)
    document.addEventListener("keydown", alPresionar)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", alPresionar)
      document.body.style.overflow = ""
    }
  }, [carritoAbierto])

  useEffect(() => () => clearTimeout(timerAviso.current), [])

  const cantidadTotal = carrito.reduce((suma, item) => suma + item.cantidad, 0)

  const agregarAlCarrito = (producto, talle) => {
    setCarrito((actual) => {
      const existe = actual.find((i) => i.id === producto.id && i.talle === talle)
      if (existe) {
        return actual.map((i) => (i === existe ? { ...i, cantidad: i.cantidad + 1 } : i))
      }
      return [...actual, { id: producto.id, talle, cantidad: 1 }]
    })
    setAviso(`${producto.nombre} (talle ${talle}) agregado al carrito`)
    clearTimeout(timerAviso.current)
    timerAviso.current = setTimeout(() => setAviso(null), 2500)
  }

  const cambiarCantidad = (id, talle, delta) => {
    setCarrito((actual) =>
      actual
        .map((i) => (i.id === id && i.talle === talle ? { ...i, cantidad: i.cantidad + delta } : i))
        .filter((i) => i.cantidad > 0)
    )
  }

  const quitarDelCarrito = (id, talle) => {
    setCarrito((actual) => actual.filter((i) => !(i.id === id && i.talle === talle)))
  }

  const productosVisibles =
    categoria === "todos" ? productos : productos.filter((p) => p.categorias.includes(categoria))

  const filtros = [
    { valor: "todos", texto: "Todos" },
    { valor: "hombre", texto: "Hombre" },
    { valor: "mujer", texto: "Mujer" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-zinc-300">

      {/* NAVBAR */}
      <nav className="bg-black/95 backdrop-blur-md text-white p-6 flex items-center justify-between shadow-xl sticky top-0 z-50">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Micucci Store"
            className="h-14 object-contain hover:scale-105 transition duration-300"
          />
        </a>

        <div className="flex gap-6 items-center text-sm md:text-base font-medium">
          <a href="#productos" onClick={() => setCategoria("hombre")} className="hover:text-gray-300 transition">Hombre</a>
          <a href="#productos" onClick={() => setCategoria("mujer")} className="hover:text-gray-300 transition">Mujer</a>
          <a href="#outfits" className="hover:text-gray-300 transition">Outfits</a>

          <button
            onClick={() => setCarritoAbierto(true)}
            aria-label={`Abrir carrito (${cantidadTotal} productos)`}
            className="bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            🛒 {cantidadTotal}
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

        <a
          href="#productos"
          onClick={() => setCategoria("todos")}
          className="inline-block bg-white text-black px-10 py-4 rounded-full hover:bg-zinc-200 transition duration-300 font-bold shadow-xl"
        >
          Ver colección
        </a>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="p-10 scroll-mt-28">
        <h3 className="text-4xl font-bold mb-8 text-center tracking-wide">
          Productos destacados
        </h3>

        <div className="flex justify-center gap-3 mb-12">
          {filtros.map((f) => (
            <button
              key={f.valor}
              onClick={() => setCategoria(f.valor)}
              aria-pressed={categoria === f.valor}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                categoria === f.valor
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              {f.texto}
            </button>
          ))}
        </div>

        {productosVisibles.length === 0 ? (
          <p className="text-center text-gray-500">Pronto vamos a sumar productos en esta categoría.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {productosVisibles.map((producto) => (
              <TarjetaProducto key={producto.id} producto={producto} onAgregar={agregarAlCarrito} />
            ))}
          </div>
        )}
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
      <section id="outfits" className="px-10 py-20 scroll-mt-28">
        <div className="bg-black text-white rounded-[40px] p-12 text-center shadow-2xl">
          <h3 className="text-5xl font-bold mb-6">
            SET COMPLETOS
          </h3>

          <p className="text-gray-300 text-lg mb-8">
            Combinaciones urbanas premium listas para usar.
          </p>

          <a
            href={linkWhatsapp("¡Hola! Quiero ver los sets completos disponibles.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-full hover:bg-zinc-200 transition font-bold"
          >
            Consultar outfits
          </a>
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
            <p>Elegí tu producto y talle</p>
          </div>

          <div>
            <p className="text-4xl mb-3">2</p>
            <p>Agregalo al carrito</p>
          </div>

          <div>
            <p className="text-4xl mb-3">3</p>
            <p>Enviá tu pedido por WhatsApp y coordinamos pago y envío</p>
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
          {INSTAGRAM_URL && (
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-300 transition">
              <FaInstagram /> Instagram
            </a>
          )}
          <a href={linkWhatsapp("¡Hola! Tengo una consulta.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-300 transition">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Micucci Store. Todos los derechos reservados.
        </p>
      </footer>

      {/* AVISO DE PRODUCTO AGREGADO */}
      {aviso && (
        <div
          role="status"
          className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-5 py-3 rounded-full shadow-2xl text-sm flex items-center gap-3 w-max max-w-[calc(100%-2rem)]"
        >
          <span>{aviso}</span>
          <button onClick={() => setCarritoAbierto(true)} className="font-bold underline shrink-0">
            Ver carrito
          </button>
        </div>
      )}

      {carritoAbierto && (
        <PanelCarrito
          items={carrito}
          onCerrar={() => setCarritoAbierto(false)}
          onCambiarCantidad={cambiarCantidad}
          onQuitar={quitarDelCarrito}
        />
      )}

      {/* WHATSAPP FLOTANTE PREMIUM */}
      <a
        href={linkWhatsapp("¡Hola! Vengo de la tienda online.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribinos por WhatsApp"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 z-50"
      >
        <FaWhatsapp className="text-4xl" />
      </a>

    </div>
  )
}

export default App
