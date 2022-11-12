import React, { memo } from "react";
import { usePokeApi } from "../../api/api";

type Props = {
  no: number;
};
export const PokeDisp: React.FC<Props> = memo(({ no }) => {
  const { pokemon } = usePokeApi(no);
  if (!pokemon) return <div>Loading...</div>;
  return (
    <div>
      <img height={300} src={pokemon.sprites.front_default} />
      <img height={300} src={pokemon.sprites.front_shiny} />
      <div>
        <h2>{pokemon.name}</h2>
        <ol>
          {pokemon.types.map((item) => (
            <li>{item.type.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
});
