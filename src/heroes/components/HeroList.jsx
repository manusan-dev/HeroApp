import { useMemo } from "react";
import { getHereosByPublisher } from "../helpers/getHereosByPublisher"
import { HeroCard } from "./HeroCard";



export const HeroList = (publisher) => {
 
   const heroes = useMemo(() => getHereosByPublisher(publisher), [publisher]);
 
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
            heroes.map(hero => (
               <HeroCard key={hero.id} {...hero}/>
            ))
            }
        </div>   
    )
}
