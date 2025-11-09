export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
//   idPokemon?: string;
  name: string;
  url: string;
}
