import { IGraphqlQLResponse } from "./GraphqlResponse.interface";

export interface IFilm {
  title: string;
  episodeID: string;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
  created: string;
  edited: string;
  id: string;
  planetConnection: IGraphqlQLResponse<"planet">;
}
