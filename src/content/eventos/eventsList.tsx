import { supabase } from '@/db/supabase'
import { CardEvento } from '@/components'
const { data, error } = await supabase.from('events').select('*')

export default function EventsList() {
  if (error) return <div>{error.message}</div>
  return (
    <>
      {data.map((evento) => (
        <CardEvento key={evento.id} />
      ))}
    </>
  )
}
