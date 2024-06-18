import { Avatar, Card, CardBody, Chip } from '@nextui-org/react'

interface IProps {}

export const CardEvento = (props: IProps) => {
  return (
    <>
      <Card
        radius="sm"
        shadow="none"
        className="w-full bg-white border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out"
      >
        <CardBody className="p-6">
          <div className="flex gap-4">
            <section>
              <Avatar
                src="/images/evento.webp"
                className="w-32 h-32"
              />
            </section>
            <section className="flex flex-col gap-2">
              <Chip
                color="primary"
                radius="sm"
              >
                Evento
              </Chip>
              <div>
                <h1 className="text-xl">
                  MICROCAPSULACIÓN APLICADO A ALIMENTOS
                </h1>
                <p className="font-normal text-gray-500">Nombre del autor</p>
              </div>
            </section>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
