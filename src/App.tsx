function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold text-blue-600">Mizu</h1>
        <nav className="space-x-4">
          <a href="#products" className="hover:underline">Produktai</a>
          <a href="#apie" className="hover:underline">Apie</a>
          <a href="#kontaktai" className="hover:underline">Kontaktai</a>
        </nav>
      </header>

      <main className="text-center py-10">
        <h2 className="text-3xl font-bold text-blue-600">Japoniška kosmetika, kuria gali pasitikėti</h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          <div className="bg-white p-4 rounded-2xl shadow">
            <img src="https://i.postimg.cc/pTgytvxR/premium-acerola-2.webp" alt="Lululun kaukės" className="w-full h-auto rounded-xl" />
            <h3 className="mt-4 text-lg font-semibold">🌸 Lululun kaukės</h3>
            <p className="text-sm text-gray-600">Kasdieniam drėkinimui</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Mizu – Japoniškas grožio pasaulis
      </footer>
    </div>
  );
}

export default App;
