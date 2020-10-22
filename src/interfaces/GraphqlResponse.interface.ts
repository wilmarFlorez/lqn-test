import { IPerson } from "./People.interface";
import { IFilm } from "./Film.interface";
import { IPlanet } from "./Planet.interface";
import { IEdge } from "./Edge.interface";

export type GraphqlResponseList = {
  people: IPerson;
  film: IFilm;
  planet: IPlanet;
};

export interface IPageInfo {
  startCursor: string;
  endCursor: string;
}

export interface IGraphqlQLResponse<T extends keyof GraphqlResponseList> {
  totalCount: number;
  pageInfo: IPageInfo;
  people: GraphqlResponseList[T][];
  edges: IEdge[];
  films?: GraphqlResponseList[T][];
  planets?: GraphqlResponseList[T][];
}

export interface IGraphQLResponseSuccess<T extends keyof GraphqlResponseList> {
  error: false;
  data: IGraphqlQLResponse<T>;
}
export interface IGraphQLResponseError {
  error: true;
  message: string;
}
