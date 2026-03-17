import Hero from "./components/Hero.jsx";

function App() {
  return (
    <main className="bg-black text-white">

      {/* Hero Section */}
      <Hero />

      {/* Next Section (creates scroll area) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

        <h2 className="text-4xl font-semibold mb-4">
          Continue Scrolling
        </h2>

        <p className="text-gray-400 max-w-xl">
          This section exists to provide scroll space for the GSAP
          animation above. As you scroll, the car animation in the
          hero section progresses smoothly based on scroll position.
        </p>

      </section>

      {/* Extra spacing section */}
      <section className="h-[100vh]" />

    </main>
  );
}

export default App;