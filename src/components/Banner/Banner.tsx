interface IProps {
  title: string
  description: string
  image: string
}

export default function Banner(props: IProps) {
  const { title, description, image } = props
  return (
    <div className="relative w-full h-[500px] max-h-[500px]">
      <img
        src={`/images/${image}`}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <section className="container absolute z-10 top-0 right-0 bottom-0 left-0 bg-black/40 w-full h-full">
        <div className="w-full h-full text-white flex flex-col justify-center items-center">
          <div>
            <h1 className="text-white text-2xl">{title}</h1>
            <p className="text-6xl">{description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
