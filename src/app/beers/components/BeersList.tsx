import { Beer } from "@/app/types";
import CardBeer from "./CardBeer";

export default function BeersList({ beers }: { beers: Beer[] | null }) {
  return (
    <>
      {beers ? (
        beers.map((beer) => (
          <li key={beer.id} className="relative">
            <CardBeer
              image_url={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
            />
          </li>
        ))
      ) : (
        <div className="text-xl font-bold">No beers available !! </div>
      )}
    </>
  );
}
