import { Button } from "@/components"
import { ICar } from "@/models"
import { useState } from "react";
import { useNavigate } from "react-router";

const CardHome:React.FC<ICar> = ({ name, photo, year, price, id  }) => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  items-center  hover:cursor-pointer" 
      onMouseEnter={() => setShowButton(true)} 
      onMouseLeave={() => setShowButton(false)}
      onClick={() => navigate(`/detail/${id}`)}>
       <h2 className="text-[28px] font-semibold">{name}</h2>
       <p className="font-normal">{year} | {price}</p>
       <img src={photo} alt={name} className="w-full  h-[220px] object-contain" />
      <div className="px-5  mt-[-50px]   w-full">

        <Button 
          className={`bg-black hover:bg-black cursor-pointer transition-opacityduration-300  w-full  ${showButton ? "opacity-100 visible" : "opacity-0 invisible"}`}  
          variant="default" 
          size="default">
          Ver modelo
        </Button>
      
              </div>
    </div>
  )
}

export default CardHome