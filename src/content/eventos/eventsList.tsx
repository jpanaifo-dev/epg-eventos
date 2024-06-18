import { supabase } from '@/db/supabase'
import { CardEvento } from '@/components'
import type { IEvent } from '@/types'
const { data, error } = await supabase.from('events').select('*, person(*)')

export default function EventsList() {
  if (error) return <div>{error.message}</div>

  const eventList = data as IEvent[]

  return (
    <main className="py-16">
      <div className="grid grid-cols-2 gap-4">
        {eventList?.map((evento) => (
          <CardEvento
            key={evento.id}
            evento={evento}
          />
        ))}
      </div>
    </main>
  )
}
