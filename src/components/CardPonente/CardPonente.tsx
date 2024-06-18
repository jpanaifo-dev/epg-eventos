import { Card, CardBody } from '@nextui-org/react'
import type { IPerson } from '@/types'

interface IProps {
  ponente: IPerson
}

export const CardPonente = (props: IProps) => {
  const {
    ponente: { name, surName },
  } = props
  return (
    <>
      <Card
        shadow="none"
        radius="sm"
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Ponente"
        />
        <CardBody>
          <h4>
            {name} {surName}
          </h4>
        </CardBody>
      </Card>
    </>
  )
}
