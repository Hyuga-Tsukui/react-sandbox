import axios from "axios";
import useSWR from "swr";

export const fetcher = <T>(url: string) =>
  axios.get<string, { data: T }>(url).then((res) => res.data);

type PokeApi = {
  response: {
    name: string;
    types: {
      type: {
        name: string;
      };
    }[];
    sprites: { front_default: string; front_shiny: string };
  };
};

export const usePokeApi = (id: number) => {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher<PokeApi["response"]>
  );

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};
