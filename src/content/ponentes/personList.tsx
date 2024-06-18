import { supabase } from '@/db/supabase'
import { CardPonente } from '@/components'
import type { IPerson } from '@/types'
const { data, error } = await supabase.from('persons').select('*')

export default function PersonList() {
  if (error) return <div>{error.message}</div>

  const ponentes = data as IPerson[]

  return (
    <main className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {ponentes?.map((ponente) => (
          <CardPonente
            key={ponente.id}
            ponente={ponente}
          />
        ))}
      </div>
    </main>
  )
}
