export type sezon = {
  season: number,
  episodesNumber: number
}

export type character = {
  name: string,
  image: string
}

export type episode = {
  name: string,
  air_date: string,
  episode: string,
  characters: character[]
}
