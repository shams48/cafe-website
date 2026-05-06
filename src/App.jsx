import React, { useState } from "react";

const menuItems = [
  { category: "Coffee", name: "Espresso", description: "Strong classic espresso shot", price: "€2.20" },
  { category: "Coffee", name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "€3.40" },
  { category: "Coffee", name: "Iced Latte", description: "Cold milk, espresso, and ice", price: "€4.10" },
  { category: "Coffee", name: "Caramel Macchiato", description: "Sweet caramel, milk, and espresso", price: "€4.50" },
  { category: "Desserts", name: "Chocolate Cake", description: "Rich handmade chocolate slice", price: "€4.80" },
  { category: "Desserts", name: "Cheesecake", description: "Creamy vanilla cheesecake", price: "€4.60" },
  { category: "Desserts", name: "Croissant", description: "Fresh buttery pastry", price: "€2.90" },
  { category: "Breakfast", name: "Avocado Toast", description: "Sourdough bread, avocado, egg", price: "€6.90" },
  { category: "Breakfast", name: "Pancakes", description: "Served with berries and maple syrup", price: "€7.40" },
  { category: "Breakfast", name: "Granola Bowl", description: "Yogurt, granola, fruits, honey", price: "€5.90" },
];

const categories = ["All", "Coffee", "Desserts", "Breakfast"];

const gallery = [
  {
    title: "Morning coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fresh desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cozy interior",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Breakfast plates",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
  },
];

function IconCircle({ children }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-lg text-white">
      {children}
    </span>
  );
}

export default function CafeWebsite() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#fbf7f0] text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#fbf7f0]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight">
            <IconCircle>☕</IconCircle>
            Luna Cafe
          </a>

          <section className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="hover:text-amber-700" href="#menu">Menu</a>
            <a className="hover:text-amber-700" href="#gallery">Photos</a>
            <a className="hover:text-amber-700" href="#about">About</a>
            <a className="hover:text-amber-700" href="#contact">Contact</a>
            <a href="#contact" className="rounded-full bg-stone-900 px-5 py-2.5 text-white shadow-sm transition hover:bg-amber-800">
              Reserve Table
            </a>
          </section>

          <button
            className="rounded-full border border-stone-300 p-2 text-xl md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>

        {mobileOpen && (
          <section className="border-t border-stone-200 px-5 py-4 md:hidden">
            <section className="flex flex-col gap-4 text-sm font-medium">
              <a href="#menu" onClick={() => setMobileOpen(false)}>Menu</a>
              <a href="#gallery" onClick={() => setMobileOpen(false)}>Photos</a>
              <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
            </section>
          </section>
        )}
      </header>

      <section id="home" className="relative overflow-hidden">
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <section className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
              ★ Fresh coffee every morning
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Cozy cafe for coffee, breakfast, and sweet moments.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
              Welcome to Luna Cafe — a warm place with handmade desserts, specialty coffee,
              fresh breakfast plates, and calm city vibes.
            </p>
            <section className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#menu" className="rounded-full bg-stone-900 px-7 py-3.5 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-800">
                View Menu
              </a>
              <a href="#gallery" className="rounded-full border border-stone-300 px-7 py-3.5 text-center font-semibold transition hover:-translate-y-0.5 hover:border-stone-900">
                See Photos
              </a>
            </section>
          </section>

          <section className="relative">
            <section className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber-200 blur-2xl" />
            <section className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-stone-300 blur-2xl" />
            <img
              className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-2xl"
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
              alt="Cafe interior with warm coffee atmosphere"
            />
            <section className="absolute bottom-6 left-6 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <p className="text-sm text-stone-500">Today’s special</p>
              <p className="text-xl font-bold">Latte + Croissant</p>
              <p className="mt-1 font-semibold text-amber-800">€5.90</p>
            </section>
          </section>
        </section>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-5 py-16">
        <section className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <section>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">Our Menu</p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">Fresh, simple, delicious.</h2>
          </section>
          <section className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-stone-900 text-white"
                    : "border border-stone-300 bg-white text-stone-700 hover:border-stone-900"
                }`}
              >
                {category}
              </button>
            ))}
          </section>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {filteredMenu.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <section className="flex items-start justify-between gap-4">
                <section>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="mt-2 text-stone-600">{item.description}</p>
                </section>
                <p className="rounded-full bg-amber-100 px-4 py-2 font-bold text-amber-900">{item.price}</p>
              </section>
            </article>
          ))}
        </section>
      </section>

      <section id="gallery" className="bg-stone-950 py-16 text-white">
        <section className="mx-auto max-w-7xl px-5">
          <section className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Photos</p>
            <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">A little taste before you visit.</h2>
          </section>

          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((photo) => (
              <article
                key={photo.title}
                className="group overflow-hidden rounded-[1.7rem] bg-stone-900 shadow-xl"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <section className="p-5">
                  <h3 className="text-lg font-bold">{photo.title}</h3>
                  <p className="mt-1 text-sm text-stone-300">Luna Cafe atmosphere</p>
                </section>
              </article>
            ))}
          </section>
        </section>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3">
        <article className="rounded-[2rem] bg-white p-8 shadow-sm md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-700">About Us</p>
          <h2 className="mt-3 font-serif text-4xl font-bold">Made for slow mornings and warm conversations.</h2>
          <p className="mt-5 leading-8 text-stone-600">
            We serve carefully brewed coffee, fresh pastries, and breakfast plates made with simple ingredients.
            Whether you come to study, work, meet friends, or just take a small break, Luna Cafe is designed
            to feel calm, cozy, and welcoming.
          </p>
        </article>

        <article className="rounded-[2rem] bg-amber-100 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Opening Hours</h3>
          <section className="mt-6 space-y-4 text-stone-700">
            <p>🕒 Mon–Fri: 08:00–20:00</p>
            <p>🕒 Sat–Sun: 09:00–22:00</p>
          </section>
        </article>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-16">
        <section className="grid overflow-hidden rounded-[2rem] bg-white shadow-xl md:grid-cols-[0.9fr_1.1fr]">
          <section className="bg-stone-900 p-8 text-white md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Visit Us</p>
            <h2 className="mt-3 font-serif text-4xl font-bold">Reserve a table or drop by today.</h2>
            <section className="mt-8 space-y-5 text-stone-200">
              <p>📍 Brivibas Street 21, Riga</p>
              <p>☎️ +371 22 123 456</p>
              <p>📸 @lunacafe</p>
            </section>
          </section>

          <form className="grid gap-4 p-8 md:p-12">
            <section className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700" placeholder="Your name" />
              <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700" placeholder="Phone number" />
            </section>
            <section className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700" type="date" />
              <input className="rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700" type="time" />
            </section>
            <textarea className="min-h-32 rounded-2xl border border-stone-200 px-4 py-3 outline-none transition focus:border-amber-700" placeholder="Message / special request" />
            <button type="button" className="rounded-full bg-amber-700 px-7 py-3.5 font-bold text-white transition hover:bg-stone-900">
              Send Request
            </button>
          </form>
        </section>
      </section>

      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500">
        © 2026 Luna Cafe. Designed with love, coffee, and too many croissants.
      </footer>
    </main>
  );
}
