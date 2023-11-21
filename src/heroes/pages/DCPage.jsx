import { HeroList } from "../components/HeroList"


export const DCPage = () => {

  const publisher = 'DC Comics';

  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      {HeroList(publisher)}
      
    </>
    )
}
