import { v4 as uuid } from "uuid";

import { fetchAllBeersAction } from "./beers/actions";
// import InfinitScrollBeers from "./beers/components/InfinitScrollBeers";
import BeersList from "./beers/components/BeersList";
import LoadMore from "./beers/components/LoadMore";

export default async function Beers({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  /* The line of code `const search = typeof searchParams.search === "string" ?
  searchParams.search : "undefined";` is checking the type of the
  `searchParams.search` property. */
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "undefined";

  const beerList = await fetchAllBeersAction({ search });

  return (
    <section className="">
      <div className="container p-6">
        <div className="mb-12 flex items-center justify-between gap-x-16">
          <h1 className="flex-1 text-3xl font-bold">Lista de Bebidas</h1>

          {/* <div className='flex-1'>
            <Search search={search} />
          </div> */}
        </div>

        <ul
          key={uuid()}
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {/* <InfinitScrollBeers search={"Dead"} initialBeers={beerList || []} /> */}
          <BeersList beers={beerList} />
          <LoadMore search={""} />
        </ul>
      </div>
    </section>
  );
}
