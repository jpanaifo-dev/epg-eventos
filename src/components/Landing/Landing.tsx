export default function Landing() {
  return (
    <>
      <div className="relative w-full">
        <img
          src="/images/landing.png"
          alt="Landing"
          className="w-full h-screen rounded-none"
        />
        <main className="absolute z-10 top-0 right-0 bottom-0 left-0 bg-black/40 w-full h-full">
          <section className="w-full h-full text-white">
            <h1 className="text-white">
              37
              <span className="text-2xl">avo</span>
            </h1>
            <p>Aniversario &</p>
            <h1 className="text-white">
              I <span className="text-2xl">er</span>
            </h1>
            <p>Encuentro Científico</p>
          </section>
        </main>
      </div>
    </>
  )
}
