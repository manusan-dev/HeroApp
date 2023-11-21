import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {

  const publisher = 'Marvel Comics';

  return (
    <>
    <h1>Marvel Page</h1>
    <hr />

    {HeroList(publisher)}
    </>
  )
}
  