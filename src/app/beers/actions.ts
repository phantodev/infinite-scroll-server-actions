"use server";
// import { getAllProperties } from "../lib/mongo/properties";
import { Beer } from "../types";

type searchProps = {
  page?: number;
  search?: string | undefined;
};

export async function fetchAllBeersAction({
  page = 1,
  search = "",
}: searchProps) {
  const perPage = 5;
  let apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

  // Adiciona o parâmetro de busca à URL apenas se a busca não for vazia
  if (search !== "undefined") {
    apiUrl += `&beer_name=${search}`;
  }
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data as Beer[];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
