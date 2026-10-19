// Catálogo de la tienda. Para agregar un producto, sumá un objeto a esta lista.
// categorias: "hombre", "mujer" (un producto unisex lleva las dos).

export const productos = [
  {
    id: "campera-puffer",
    nombre: "Campera Puffer",
    descripcion: "Streetwear premium unisex.",
    precio: 89999,
    imagen: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&auto=format&fit=crop",
    categorias: ["hombre", "mujer"],
    talles: ["S", "M", "L", "XL"],
  },
  {
    id: "remera-essential",
    nombre: "Remera Essential",
    descripcion: "Minimalismo moderno urbano.",
    precio: 39999,
    imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80&auto=format&fit=crop",
    categorias: ["hombre", "mujer"],
    talles: ["S", "M", "L", "XL"],
  },
  {
    id: "jean-cargo",
    nombre: "Jean Cargo",
    descripcion: "Denim urbano relajado.",
    precio: 74999,
    imagen: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80&auto=format&fit=crop",
    categorias: ["hombre", "mujer"],
    talles: ["38", "40", "42", "44", "46"],
  },
]
