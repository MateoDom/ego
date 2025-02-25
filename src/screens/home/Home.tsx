import { useQuery } from "@tanstack/react-query"
import { getModels } from "./services/home-services"
import { CardHome } from "./components"

const Home = () => {
  const { data } = useQuery({ queryKey: ['models'], queryFn: getModels })
  return (
    <div className="md:px-40 px-4">
      <h1 className="text-[50px] font-bold md:py-20 py-10">Descubrí todos los modelos </h1>
      {/* filtro */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {data?.map((car) => (
          <CardHome key={car.id} {...car} />
        ))}
      </div>
    </div>
  )
}

export default Home