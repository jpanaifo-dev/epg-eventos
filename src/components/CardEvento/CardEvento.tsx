import type { IEvent } from '@/types'
import { Avatar, Card, CardBody, Chip } from '@nextui-org/react'

interface IProps {
  evento: IEvent
}

export const CardEvento = (props: IProps) => {
  const {
    evento: {
      title,
      person: { name, surName },
      date,
      timeStart,
      timeEnd
    },
  } = props

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
                <h1 className="text-xl">{title}</h1>
                <p className="font-light text-gray-500">
                  {name} {surName}
                </p>
                <div className='justify-center items-center'>
                  <p className='bg-blue-600 p-1 rounded-sm text-white w-72 text-center'>{date} {timeStart} - {timeEnd}</p>
                </div>
              </div>
            </section>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
