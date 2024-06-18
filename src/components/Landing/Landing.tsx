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
          <section className="w-full h-full text-white flex flex-col justify-center items-center">
            <div>
              <h1 className="text-white text-2xl">
                37
                <span className="text-2xl">avo</span>
              </h1>
              <p className="text-6xl">Aniversario &</p>
              <h1 className="text-white text-7xl">
                I <span className="text-5xl">er</span>
              </h1>
              <p className="text-8xl">Encuentro Científico</p>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
